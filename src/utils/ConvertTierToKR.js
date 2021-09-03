export const ConvertTierToKR = (tierENG) => {
    switch (tierENG) {
        case "UNRANKED":
            return "";
        case "IRON":
            return "아이언";
        case "BRONZE":
            return "브론즈";
        case "SILVER":
            return "실버";
        case "GOLD":
            return "골드";
        case "PLATINUM":
            return "플래티넘";
        case "DIAMOND":
            return "다이아";
        case "MASTER":
            return "마스터";
        case "GRANDMASTER":
            return "그랜드마스터";
        case "CHALLENGER":
            return "챌린저";
        default:
            break;
    }
} 