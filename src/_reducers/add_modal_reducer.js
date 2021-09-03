const initialState = {
    data: {},
    isOn: false
};

function addModal (state = initialState, action) {
    switch (action.type) {
        case "ADD_MODAL_ON":
            return { ...state, isOn: true };
        
        case "ADD_MODAL_OFF":
            return { ...state, isOn: false };
        
        default:
            return state;
    }
}

export default addModal