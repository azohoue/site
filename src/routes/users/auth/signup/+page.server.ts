import { isMailAvailable } from '$lib/utils/availableMail';
import { createUser } from '$lib/utils/createUser';
import { isMailDisponible } from '$lib/utils/mailDisponible';
import { validerEmail, validerMotDePasse, validerNom, validerPrenom } from '$lib/utils/validators';
import type { PageServerLoad } from './$types';
import { fail, type Actions } from '@sveltejs/kit';

const payloadError = {
    firstname: "",
    lastname: "",
    organization: "",
    email: "",
    password: ""
}

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = ({
    default: async ({ request, locals }) => {
        // Recupereation des données de la requete ! 
        const formData = await request.formData()
        const user = Object.fromEntries([...formData])

        // Validation des données recues de l'utilisateur !
        payloadError.lastname = validerNom(user.lastname as string)
        payloadError.firstname = validerPrenom(user.firstname as string)
        payloadError.email = validerEmail(user.email as string)
        payloadError.password = validerMotDePasse(user.password as string)

        // Retourne une erreur si l'une des donées ne correspond pas ! 
        if (payloadError.email || payloadError.lastname || payloadError.firstname || payloadError.organization || payloadError.password) {
            return fail(400, { payloadError: { ...payloadError } })
        }

        if (! await isMailAvailable(locals.pb, user.email as string)) {
            payloadError.email = "L'adresse email est déjà utilisée !"
            return fail(400, { payloadError: { ...payloadError } })
        }
        // Si l'email est dispo à ce niveau, alors
        // Creer l'utilisateur
        const rst = await createUser(locals.pb, user)
        if (rst.success) {
            // TODO: envoyer le mail de vérification
            return {}
        } else {
            fail(401)
        }
    }
}) satisfies Actions