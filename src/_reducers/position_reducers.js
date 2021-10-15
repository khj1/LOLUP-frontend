const initialState = {
    data: {},
    value: null
};

function position (state = initialState, action) {
    switch (action.type) {
        case "ALL-POSITION":
            return { ...state, value: null };
        
        case "TOP":
            return { ...state, value: action.type };

        case "JUG":
            return { ...state, value: action.type };

        case "MID":
            return { ...state, value: action.type };

        case "BOT":
            return { ...state, value: action.type };

        case "SUP":
            return { ...state, value: action.type };

        default:
            return state;
    }
}

export default position