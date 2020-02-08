import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import popularsReducer from "./popularsReducer";
import appReducer from "./appReducer";
import itineraryReducer from "./itineraryReducer";

const rootReducer = combineReducers({
    cities: citiesReducer,
    populars: popularsReducer,
    app: appReducer,
    itineraries: itineraryReducer
});

export default rootReducer;