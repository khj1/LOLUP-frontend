const initialState = {
    data: {},
    section: 1
};

function duoData (state = initialState, action) {
    switch (action.type) {
        case "GET":
            return { ...state, section: state.section + 1};

        case "INIT":
            return { ...state, section: 1};

        default:
            return state;
    }
}

export default duoData;