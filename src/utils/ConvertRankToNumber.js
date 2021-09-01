export const ConvertRankToNumber = (rankRoma) => {
    switch (rankRoma) {
        case "I":
            return 1;
        case "II":
            return 2;
        case "III":
            return "실버";
        case "IV":
            return 4;
        default:
            return rankRoma;
    }
} 