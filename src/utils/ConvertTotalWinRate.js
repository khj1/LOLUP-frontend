export const ConvertTotalWinRate = (win, lose) => {
    const winRate = win / (lose + win) * 100;
    const winAndLose = `${win}승 ${lose}패`;

    const styleByWinRate = (winRate) => {
        if (winRate >= 60) {
            return {
                color: "#FF0000",
                fontWeight: "bold"
            };
        } else if (winRate >= 50) {
            return {
                color: "#003DF6",
                fontWeight: "bold"
            };
        } else if (winRate >= 40) {
            return {
                color: "#000000"
            };
        } else {
            return {
                color: "#AAAAAA",
                fontWeight: "bold"
            };
        }
    }

    return <span style={styleByWinRate(winRate)}>{winAndLose} ({winRate}%)</span>
}