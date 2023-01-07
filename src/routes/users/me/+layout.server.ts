import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {

    // Get 10 job list
    const jobs = await locals.pb.collection("jobs").getList(1, 10, {
        sort: "-created",
        expand: "organization",
        filter: "status='En ligne'"
    })

    // Modifier la date de publication du post
    jobs.items.forEach((d: any) => {
        // d.created = "1"
        const postDate = new Date(Date.parse(d.created))
        const currentDate = Date.now()
        const difference = currentDate - postDate
        if ((difference / 1000) < 60) {
            d.created = "A l'instant"
        } else {
            if ((difference / 60000) < 60) {
                const DF = Math.floor(difference / 60000)
                d.created = "Il y a " + DF + (DF == 1 ? " minute" : " minutes")
            } else {
                if ((difference / 3600000) < 24) {
                    const DF = Math.floor(difference / 3600000)
                    d.created = "Il y a " + DF + (DF == 1 ? " heure" : " heures")
                } else {
                    if ((difference / 86400000) < 30) {
                        const DF = Math.floor(difference / 86400000)
                        d.created = "Il y a " + DF + (DF == 1 ? " jour" : " jours")
                    } else {
                        if ((difference / 2629800000) < 12) {
                            d.created = "Il y a " + Math.floor(difference / 2629800000) + " mois"
                        } else {
                            d.created = "Il y a " + Math.floor(difference / 31557600000) + "année(s)"
                        }
                    }
                }
            }
        }
    })
    return {
        user: JSON.parse(JSON.stringify(locals.person)),
        jobs: JSON.parse(JSON.stringify(jobs))
    };
}) satisfies LayoutServerLoad;