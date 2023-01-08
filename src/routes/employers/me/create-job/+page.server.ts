import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load = (async ({ parent }) => {
    return {}
}) satisfies PageServerLoad;

export const actions = ({
    default: async ({ locals, request }) => {
        const formData = await request.formData()
        const job = Object.fromEntries([...formData])
        // TODO: Vérification
        // envoyer dans la base de données
        try {
            await locals.pb.collection("jobs").create({
                name: job.name,
                location: job.location,
                salary: job.salary,
                contract: job.contract,
                description: job.description,
                organization: job.organization,
                status: "En attente",
                views: 0
            })
            return {} // <- it's the return data
        }
        catch {
            return fail(400, {})
        }
    }
}) satisfies Actions