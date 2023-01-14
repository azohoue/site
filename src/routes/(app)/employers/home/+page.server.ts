import { convertTime } from '$lib/utils/dateConverter';
import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load = (
    async ({ locals, parent }) => {
        const parentData = await parent()
        // Load employer job propositions from here
        let jobs = await locals.pb.collection("jobs").getList(1, 10, {
            filter: `organization='${parentData.organization.id}'`
        })
        jobs.items.forEach((item) => {
            item.created = convertTime(item.created)
        })
        jobs = jobs.items.map((item: any) => {
            return JSON.parse(JSON.stringify(item))
        })

        return {
            jobs
        };
    }
) satisfies PageServerLoad;


export const actions = ({
    signout: async ({ locals }) => {

        // Supprimer les cookies et les données
        locals.pb.authStore.clear()
        // Renvoyer vers le login
        throw redirect(307, "/employers/auth/signin")
    }
}) satisfies Actions