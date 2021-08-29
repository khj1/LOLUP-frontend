import { combineReducers } from "redux";
import user from './user_reducer';
import app from "./application_reducer";

const rootReducer = combineReducers({
    user,
    app
})

export default rootReducer;