export const createUser = async (pb: any, user: any) => {
    let data;
    try {
        data = await pb.collection("users").create({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: "user",
            password: user.password,
            passwordConfirm: user.password,
            emailVisibility: true
        })
    } catch {
        return {
            success: false
        }
    }
    return {
        success: true,
        data: data
    }
}