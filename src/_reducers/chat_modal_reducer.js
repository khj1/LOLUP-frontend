const initialState = {
    data: {},
    isOn: false
};

function chatModal (state = initialState, action) {
    switch (action.type) {
        case "CHAT_MODAL_ON":
            return { ...state, isOn: true };
        
        case "CHAT_MODAL_OFF":
            return { ...state, isOn: false };
        
        default:
            return state;
    }
}

export default chatModal