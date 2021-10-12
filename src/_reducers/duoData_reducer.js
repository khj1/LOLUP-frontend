const initialState = {
    data: {},
    size: 20
};

function duoData (state = initialState, action) {
    switch (action.type) {
        case "GET":
            return { ...state, size: state.size + 20};

        case "INIT":
            return { ...state, size: 20};

        default:
            return state;
    }
}

export default duoData;