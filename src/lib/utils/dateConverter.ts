export const convertTime = (date) => {
    const postDate = new Date(Date.parse(date))
    const currentDate = Date.now()
    const difference = currentDate - postDate
    if ((difference / 1000) < 60) {
        date = "A l'instant"
    } else {
        if ((difference / 60000) < 60) {
            const DF = Math.floor(difference / 60000)
            date = "Il y a " + DF + (DF == 1 ? " minute" : " minutes")
        } else {
            if ((difference / 3600000) < 24) {
                const DF = Math.floor(difference / 3600000)
                date = "Il y a " + DF + (DF == 1 ? " heure" : " heures")
            } else {
                if ((difference / 86400000) < 30) {
                    const DF = Math.floor(difference / 86400000)
                    date = "Il y a " + DF + (DF == 1 ? " jour" : " jours")
                } else {
                    if ((difference / 2629800000) < 12) {
                        date = "Il y a " + Math.floor(difference / 2629800000) + " mois"
                    } else {
                        date = "Il y a " + Math.floor(difference / 31557600000) + "année(s)"
                    }
                }
            }
        }
    }
    return date;
}