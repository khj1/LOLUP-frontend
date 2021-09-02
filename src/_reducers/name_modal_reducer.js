const initialState = {
    data: {},
    isOn: false
};

function nameModal (state = initialState, action) {
    switch (action.type) {
        case "NAME_MODAL_ON":
            return { ...state, isOn: true };
        
        case "NAME_MODAL_OFF":
            return { ...state, isOn: false };
        
        default:
            return state;
    }
}

export default nameModal