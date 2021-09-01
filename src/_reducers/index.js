import { combineReducers } from "redux";
import user from './user_reducer';
import auth from "./auth_reducer";
import position from "./position_reducers";
import tier from "./tier_reducer";
import loginModal from "./modal_reducer";

const rootReducer = combineReducers({
    user, auth, position, tier, loginModal
})

export default rootReducer;