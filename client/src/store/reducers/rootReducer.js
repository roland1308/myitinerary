import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import popularsReducer from "./popularsReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
    cities: citiesReducer,
    populars: popularsReducer,
    app: appReducer,
});

export default rootReducer;