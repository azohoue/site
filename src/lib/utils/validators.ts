export const validerNom = (nom: string) => {
    // Cette fonction vérifie si le nom fourni par un utilisateur voulant s'inscrire est correct
    // Le nom doit être rempli
    if (nom.trim() == "") {
        return "Le nom est obligatoire";
    }
    // Le nom ne doit pas dépasser 50 caractères
    if (nom.length > 50) {
        return "Le nom ne doit pas dépasser 50 caractères";
    }
    // Le nom ne doit contenir que des lettres
    if (!nom.match(/^[a-zA-Z]+$/)) {
        return "Le nom ne doit contenir que des lettres";
    }
    return "";
}

export const validerPrenom = (prenom: string) => {
    // Le prénom doit être rempli
    if (prenom.trim() == "") {
        return "Le prénom est obligatoire";
    }
    // Le prénom ne doit pas dépasser 50 caractères
    if (prenom.length > 50) {
        return "Le prénom ne doit pas dépasser 50 caractères";
    }
    // Le prénom ne doit contenir que des lettres
    if (!prenom.match(/^[a-zA-Z-' ]+$/)) {
        return "Le prénom ne doit contenir que des lettres";
    }
    return "";
}

export const validerOrganisation = (organisation: string) => {
    // Cette fonction vérifie si le nom fourni par un utilisateur voulant s'inscrire est correct
    // Le nom doit être rempli
    if (organisation.trim() == "") {
        return "Le nom de votre organisation est obligatoire";
    }
    // Le nom ne doit pas dépasser 50 caractères
    if (organisation.length > 50) {
        return "Le nom de votre organisation ne doit pas dépasser 50 caractères";
    }
    // Le nom ne doit contenir que des lettres
    if (!organisation.match(/^[a-zA-Z-' ]+$/)) {
        return "Le nom de votre organisation ne doit contenir que des lettres";
    }
    return "";
}

export const validerEmail = (email: string) => {
    // L'adresse email doit être remplie
    if (email.trim() == "") {
        return "L'adresse email est obligatoire";
    }
    // L'adresse email doit être au bon format
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
        return "L'adresse email n'est pas valide.";
    }
    return "";
}

export const validerMotDePasse = (motDePasse: string) => {
    // Le mot de passe doit être rempli
    if (motDePasse.trim() == "") {
        return "Le mot de passe est obligatoire";
    }
    // Le mot de passe doit avoir au moins 8 caractères
    if (!motDePasse.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?!^[0-9]*$)(?!^[a-zA-Z]*$).{8,}$/)) {
        return "Le mot de passe n'est pas valide.";
    }
    return "";
}