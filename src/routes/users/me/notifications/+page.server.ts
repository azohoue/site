import type { PageServerLoad } from "../$types";

export const load = (
    async ({ locals }) => {
        try {
            const notifications = await locals.pb.collection("notifications").getFullList(200, {
                sort: "-created"
            })
            return {
                notifications: notifications
            }
        } catch {
            return {}
        }
    }
) satisfies PageServerLoad