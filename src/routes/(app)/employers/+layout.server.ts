import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    // Get user details from here
    const employer = { ...locals.person }

    // Load employer company details from here
    // TODO: Si les infos de la company exiset, ne plus faire la requeete
    const organization = await locals.pb.collection("organizations").getFirstListItem(`holder='${employer.id}'`)

    // Load employer job propositions from here
    let jobs = await locals.pb.collection("jobs").getList(1, 10, {
        filter: `organization='${organization.id}'`
    })

    jobs = jobs.items.map((item: any) => {
        return JSON.parse(JSON.stringify(item))
    })
    // return all content

    // console.log(jobs);

    return {
        jobs: {
            startAt: 1,
            endAt: 10,
            jobs: jobs
        },
        organization: JSON.parse(JSON.stringify(organization)),
        employer: employer
    };
}) satisfies LayoutServerLoad;
