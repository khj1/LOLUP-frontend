const initialState = {
    data: {},
    authorized: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "AUTHORIZED":
            return { ...state, authorized: true };
            break;

        case "UNAUTHORIZED":
            return { ...state, authorized: false };
            break; 

        default:
            return state;
            break;
    }
}