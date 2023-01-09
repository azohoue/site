import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = ({
    signout: async ({ locals }) => {

        // Supprimer les cookies et les données
        locals.pb.authStore.clear()
        // Renvoyer vers le login
        throw redirect(307, "/employers/auth/signin")
    }
}) satisfies Actions