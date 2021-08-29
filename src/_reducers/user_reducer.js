import { 
    LOGIN_USER,
    AUTH_USER
} from "../_actions/types";

// reducer에서는 이전 상태와 액션을 조합해 새로운 state을 반환해주는 역할을 한다.
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload}
            break;
        default:
            return state;
    }
}

