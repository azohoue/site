import { convertTime } from '$lib/utils/dateConverter';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {

    // Get 10 job list
    const jobs = await locals.pb.collection("jobs").getList(1, 10, {
        sort: "-created",
        expand: "organization",
        filter: "status='En ligne'"
    })

    // Modifier la date de publication du post
    jobs.items.forEach((job) => {
        job.created = convertTime(job.created)
    })
    return {
        user: JSON.parse(JSON.stringify(locals.person)),
        jobs: JSON.parse(JSON.stringify(jobs))
    };
}) satisfies LayoutServerLoad;