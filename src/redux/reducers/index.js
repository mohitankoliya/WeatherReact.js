import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
const reducers = combineReducers({
  allWeather: weatherReducer,
});
export default reducers;
