import { validerEmail, validerMotDePasse } from "$lib/utils/validators";
import { fail, type Actions } from "@sveltejs/kit";

const payloadError = {
    email: "",
    password: ""
}

export const actions = ({
    default: async ({ locals, request }) => {

        const formData = await request.formData()
        const employer = {
            email: formData.get("email") as string,
            password: formData.get("password") as string
        }
        employer.email = employer.email.toLowerCase()

        // Vérification des donnnées saisies par l'utilisateur
        payloadError.email = validerEmail(employer.email)
        payloadError.password = validerMotDePasse(employer.password)
        if (payloadError.email || payloadError.password) {
            return fail(400, { payloadError: { ...payloadError } })
        }

        // On se connecte au compte de l'utilisateur
        try {
            const { token, record } = await locals.pb.collection("users").authWithPassword(employer.email, employer.password)
            // On récupère grace à ces infos de connexion, les infos de la company

            // On vérifie si c'est un compte employer ou pas
            if (record.role != "employer") {
                // Si le role est différent de l'employer,
                // On supprimer le toke de donnexopn
                locals.pb.authStore.clear()

                // On renvoie le messager d'erreur
                return fail(401, {
                    message: "Le compte associé à ce email est un compte utilisateur. Veuillez-vous connecter en tant qu'utilisateur."
                })
            }

            if (record.verified == false) {
                locals.pb.authStore.clear()
                return fail(403, {
                    message: "Veuillez vérifier votre adresse email avant de pouvoir vous connecter."
                })
            }

            await locals.pb.collection("organizations").getFirstListItem(`holder='${record.id}'`)
            return {}
        } catch (e) {
            return fail(401, {
                message: "Erreur ! Login ou mot de passe incorrect"
            })

        }

        // TODO: Lors de l'execution des fonctions load au niveau du layout de /me si le store est vide alors on va chercher les données depuis la bd et on les affiches
    }
}) satisfies Actions