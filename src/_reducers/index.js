import { combineReducers } from "redux";
import user from './user_reducer';
import auth from "./auth_reducer";
import position from "./position_reducers";
import tier from "./tier_reducer";
import loginModal from "./login_modal_reducer";
import nameModal from "./name_modal_reducer";
import duoData from "./duoData_reducer";

const rootReducer = combineReducers({
    user, auth, position, tier, loginModal, duoData, nameModal
})

export default rootReducer;