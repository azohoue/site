import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const prerender = false;

export const load = (async ({ params, locals }) => {
    if (!params.id)
        throw error(400, {
            message: "Id invalid"
        })
    // Si l'utilisateur entre un, id, on la recherche dans la base de données.
    let job: any = {}
    // On a l'id du job recherche, on va dans la bd pour aller prendre toutes les informations sur le job?
    try {
        job = await locals.pb.collection("jobs").getFirstListItem(`id="${params.id}"`, {
            expand: 'organization'
        })
        // Augmenter le nombre de vu
        job.views += 1;
        const data = {
            "views": job.views
        };
        await locals.pb.collection("jobs").update(job.id, data)
        return {
            job: JSON.parse(JSON.stringify(job))
        }
    } catch (e) {
        console.log(e);

        // Si il y a une erreur, retourné la page 404
        // console.log("Il y a une erreur");
        throw error(404, {
            message: "L'offre d'emploi recherchée est introuvable."
        })
    }

    return {};
}) satisfies PageServerLoad;