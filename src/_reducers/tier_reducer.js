const initialState = {
    data: {},
    value: 'ALL'
};

function tier (state = initialState, action) {
    switch (action.type) {
        case "ALL":
            return { ...state, value: action.type };
        
        case "IRON":
            return { ...state, value: action.type };

        case "BRONZE":
            return { ...state, value: action.type };

        case "SILVER":
            return { ...state, value: action.type };

        case "GOLD":
            return { ...state, value: action.type };

        case "PLATINUM":
            return { ...state, value: action.type };

        case "DIAMOND":
            return { ...state, value: action.type };

        case "MASTER":
            return { ...state, value: action.type };

        case "GRANDMASTER":
            return { ...state, value: action.type };

        case "CHALLENGER":
            return { ...state, value: action.type };   
                    
        default:
            return state;
    }
}

export default tier