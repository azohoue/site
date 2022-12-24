export const isMailDisponible = async (pb: any, email: string) => {
    try {
        await pb.collection("users").getFirstListItem(`email='${email.toLowerCase()}'`)
    } catch (e: any) {
        return true
    }
    return false
}