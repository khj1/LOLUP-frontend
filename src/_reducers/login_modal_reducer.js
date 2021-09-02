const initialState = {
    data: {},
    isOn: false
};

function loginModal (state = initialState, action) {
    switch (action.type) {
        case "LOGIN_MODAL_ON":
            return { ...state, isOn: true };
        
        case "LOGIN_MODAL_OFF":
            return { ...state, isOn: false };
        
        default:
            return state;
    }
}

export default loginModal