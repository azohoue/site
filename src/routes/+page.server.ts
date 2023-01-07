import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {

    const jobs = await locals.pb.collection("jobs").getList(1, 5, {
        filter: 'status = "En ligne"', expand: 'organization', sort: "-created"
    })
    return {
        jobs: JSON.parse(JSON.stringify(jobs))
    };
}) satisfies PageServerLoad;