export const isMailAvailable = async (pb: any, email: string) => {
    try {
        await pb.collection("users").getFirstListItem(`email="${email.toLowerCase()}"`)
    } catch (e: any) {
        if (e.status == 404) return true
    }
    return false
}