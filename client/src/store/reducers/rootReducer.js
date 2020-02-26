import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import popularsReducer from "./popularsReducer";
import appReducer from "./appReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  populars: popularsReducer,
  app: appReducer,
  itineraries: itineraryReducer,
  activities: activityReducer,
  users: usersReducer
});

export default rootReducer;
