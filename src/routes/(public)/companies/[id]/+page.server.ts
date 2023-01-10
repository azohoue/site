import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (
    async ({ locals, params }) => {
        if (params.id.length > 30) throw error(400)
        try {
            const company = await locals.pb.collection("organizations").getFirstListItem(`id='${params.id}'`)
            let jobs = []
            try {
                jobs = await locals.pb.collection("jobs").getFullList(200, {
                    filter: `organization = '${company.id}' && status = 'En ligne'`,
                    sort: "-created"
                })
            } catch (e) {
                // e = null
                jobs = []
            }
            // On retourne le résultat de la requête
            return {
                jobs: JSON.parse(JSON.stringify(jobs)),
                company: JSON.parse(JSON.stringify(company)),
            }
        } catch {
            // Si erreur lors du chargement alors orga non trouvée
            throw error(404)
        }
    }
) satisfies PageServerLoad