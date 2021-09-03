const initialState = {
    data: {},
    updated: 0
};

function update (state = initialState, action) {
    switch (action.type) {
        case "UPDATE":
            return { ...state, updated: state.updated + 1 };
        
        default:
            return state;
    }
}

export default update