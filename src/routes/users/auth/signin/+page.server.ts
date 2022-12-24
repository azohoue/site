import { validerEmail, validerMotDePasse } from "$lib/utils/validators";
import { fail, type Actions } from "@sveltejs/kit";

const payloadError = {
    email: "",
    password: ""
}

export const actions = ({
    default: async ({ locals, request }) => {

        const formData = await request.formData()
        const user = {
            email: formData.get("email") as string,
            password: formData.get("password") as string
        }
        user.email = user.email.toLowerCase()

        // Vérification des donnnées saisies par l'utilisateur
        payloadError.email = validerEmail(user.email)
        payloadError.password = validerMotDePasse(user.password)

        if (payloadError.email || payloadError.password) {
            return fail(400, { payloadError: { ...payloadError } })
        }

        // On se connecte au compte de l'utilisateur
        try {
            const { token, record } = await locals.pb.collection("users").authWithPassword(user.email, user.password)
            if (record.role != "user") {
                locals.pb.authStore.clear()
                return fail(401, {
                    message: "Le compte associé à ce email est un compte d'entreprise. Veuillez-vous connecter en tant qu'employeur."
                })
            }
        } catch (e) {
            return fail(401, {
                message: "Erreur ! Login ou mot de passe incorrect"
            })
        }
        return {}
        // TODO: Lors de l'execution des fonctions load au niveau du layout de /me si le store est vide alors on va chercher les données depuis la bd et on les affiches
    }
}) satisfies Actions