export const ConvertTotalWinRate = (win, lose) => {
    const winRate = win / (lose + win) * 100;
    const winAndLose = `${win}승 ${lose}패`;

    const styleByWinRate = (winRate) => {
        if(winRate >= 70) {
            return {
                color: "#FF0000",
                fontWeight: "bold"
            };
        } else if (winRate >= 60) {
            return {
                color: "#FF0000",
            };
        } else if (winRate >= 50) {
            return {
                color: "#000080",
            };
        } else if (winRate >= 40) {
            return {
                color: "#1CBB21",
            };
        } else {
            return {
                color: "#CBCBCB",
                fontWeight: "bold"
            };
        }
    }

    return <span style={styleByWinRate(winRate)}>{winAndLose} ({winRate}%)</span>
}