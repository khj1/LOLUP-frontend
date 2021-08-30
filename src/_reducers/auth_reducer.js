const initialState = {
    data: {},
    authorized: false
};

function auth (state = initialState, action) {
    switch (action.type) {
        case "AUTHORIZED":
            return { ...state, authorized: true, data: action.payload };

        case "UNAUTHORIZED":
            return { ...state, authorized: false };

        default:
            return state;
    }
}

export default auth;