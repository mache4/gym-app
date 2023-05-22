export const getDay = (num: number) => {
    switch (num) {
        case 1: return "Ponedeljak";
        case 2: return "Utorak";
        case 3: return "Sreda";
        case 4: return "Četvrtak";
        case 5: return "Petak";
        case 6: return "Subota";
        case 7: return "Nedelja";
    }
}

export const seePlan = (day: string | undefined) => {
    if (day === "Ponedeljak" || day === "Četvrtak")
        return "A";
    if (day === "Utorak" || day === "Petak")
        return "B";
    return "none";
}