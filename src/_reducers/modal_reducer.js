const initialState = {
    data: {},
    isOn: false
};

function loginModal (state = initialState, action) {
    switch (action.type) {
        case "ON":
            return { ...state, isOn: true };
        
        case "OFF":
            return { ...state, isOn: false };
        
        default:
            return state;
    }
}

export default loginModal