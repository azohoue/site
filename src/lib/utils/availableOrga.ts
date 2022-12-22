export const isOrgaAvailable = async (pb: any, organization: string) => {
    try {
        await pb.collection("organizations").getFirstListItem(`name="${organization.toLowerCase()}"`)
    } catch (e: any) {
        if (e.status == 404) return true
    }
    return false
}