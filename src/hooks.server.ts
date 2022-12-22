// Code inside hooks files run on the app start up, their can be use to set connexion wit database
import PocketBase from "pocketbase"
import { redirect, type Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
    // A chaque requête, une variable pb est créée
    event.locals.pb = new PocketBase("http://localhost:8090");
    // On charge le cookie contenant les informations de l'utilisateur et son mot de passe depuis le navigateur

    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    try {
        event.locals.pb.authStore.isValid && await event.locals.pb.collection("users").authRefresh()
        event.locals.person = event.locals.pb.authStore.model
    } catch {
        event.locals.pb.authStore.clear();
    }

    // Redirect a connected user
    if (event.locals.pb.authStore.isValid) {
        switch (event.locals.person.role) {
            case "user":
                if (!event.url.pathname.startsWith("/users/me"))
                    throw redirect(307, "/users/me")
                break;
            case "employer":
                if (!event.url.pathname.startsWith("/employers/me"))
                    throw redirect(307, "/employers/me")
                break;
        }
    } else {
        //  Redirect a not login user
        if (event.url.pathname.startsWith("/employers/me"))
            throw redirect(307, "/employers/auth/signin")
        if (event.url.pathname.startsWith("/users/me"))
            throw redirect(308, "/users/auth/signin")
    }

    const response = await resolve(event)

    response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }))

    return response

}) satisfies Handle;