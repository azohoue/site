import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {

    try {
        await locals.pb.collection("users").confirmVerification(params.token)
    } catch (e) {
        return {
            verified: false
        }
    }
    return {
        verified: true
    };
}) satisfies PageServerLoad;