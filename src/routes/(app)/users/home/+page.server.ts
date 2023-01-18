import { convertTime } from '$lib/utils/dateConverter';
import type { PageServerLoad } from './$types';
import { redirect, type Actions, fail } from '@sveltejs/kit';

export const load = (
    async () => {
        return {};
    }
) satisfies PageServerLoad;


export const actions = (
    {
        signout: async ({ locals }) => {

            // Supprimer les cookies et les données
            locals.pb.authStore.clear()
            // Renvoyer vers le login
            throw redirect(307, "/auth/users/signin")
        },

        search: async ({ locals, request }) => {
            const formData = await request.formData()
            const query = formData.get("query") as string
            if (query.length > 30) {
                return fail(400)
            }
            try {
                console.log("lorem ipsum ");

                const result = await locals.pb.collection("jobs").getFullList(200, {
                    filter: `(name ~ '${query}' || organization.name ~ '${query}') && status = "En ligne"`, expand: "organization"
                })
                result.forEach((item) => {
                    item.created = convertTime(item.created)
                })
                return {
                    items: JSON.parse(JSON.stringify(result))
                }
            } catch {
                return fail(404)
            }
        }
    }
) satisfies Actions