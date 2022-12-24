export const createEmployer = async (pb: any, employer: any) => {
    let data;
    try {
        data = await pb.collection("users").create({
            firstname: employer.firstname,
            lastname: employer.lastname,
            email: employer.email,
            role: "employer",
            password: employer.password,
            passwordConfirm: employer.password,
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