import { isMailAvailable } from "$lib/utils/availableMail";
import { isOrgaAvailable } from "$lib/utils/availableOrga";
import { createEmployer } from "$lib/utils/createEmployer";
import { validerEmail, validerMotDePasse, validerNom, validerOrganisation, validerPrenom } from "$lib/utils/validators";

import { fail, type Actions } from "@sveltejs/kit";

const payloadError = {
    firstname: "",
    lastname: "",
    organization: "",
    email: "",
    password: ""
}

export const actions = ({
    default: async ({ request, locals }) => {
        // On formatte les données envoyées par l'utilisateur
        const formData = await request.formData()
        // De ces données, on récupère les informations d'inscription de l'utilisateur
        const employer = {
            firstname: formData.get("firstname") as string,
            lastname: formData.get("lastname") as string,
            organization: formData.get("organization") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string
        }
        employer.email = employer.email.toLowerCase()
        employer.organization = employer.organization.toLowerCase()
        // Valider les informations recues ici !
        payloadError.lastname = validerNom(employer.lastname)
        payloadError.firstname = validerPrenom(employer.firstname)
        payloadError.organization = validerOrganisation(employer.organization)
        payloadError.email = validerEmail(employer.email)
        payloadError.password = validerMotDePasse(employer.password)

        if (payloadError.email || payloadError.lastname || payloadError.firstname || payloadError.organization || payloadError.password) {
            return fail(400, { payloadError: { ...payloadError } })
        }

        const canIUseMail = await isMailAvailable(locals.pb, employer.email)
        let canIUseOrga;
        if (canIUseMail) {
            // Si je peux utiliser le mail,
            // on regarde si je peux utiliser le nom de l'organisation
            canIUseOrga = await isOrgaAvailable(locals.pb, employer.organization)
            if (canIUseOrga) {
                // Create account here ! 
                const result = await createEmployer(locals.pb, employer)
                if (result.success) {
                    // Si l'utilisateur a été bien créer
                    // On se connecte a son compte
                    const authData = await locals.pb.collection("users").authWithPassword(employer.email, employer.password)
                    // On lui crée l'organisation
                    await locals.pb.collection("organizations").create({
                        name: employer.organization,
                        holder: locals.pb.authStore.model.id
                    })
                    // On se déconnecte du compte.
                    locals.pb.authStore.clear()
                    // TODO: envoyer le mail de vérification
                    await locals.pb.collection("users").requestVerification(employer.email)
                    // On retourne le statut de succès à l'utilisateur
                    return {
                        success: true,
                    }
                } else {
                    // La création du compte n'a pas pu se faire, on retourne un fail
                    fail(401)
                }
            }
        }

        if (!canIUseMail || !canIUseOrga) {
            if (!canIUseMail) {
                payloadError.email = "L'email est déjà utilisé"
            }
            if (!canIUseOrga) {
                payloadError.organization = "Le nom de l'organisation est indisponible."
            }
            // U are not able to create account here !
            // console.log("Not able to create account");
            return fail(401, {
                payloadError: { ...payloadError }
            })
        }

    }
}) satisfies Actions