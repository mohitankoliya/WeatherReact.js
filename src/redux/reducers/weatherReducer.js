import { ActionTypes } from "../constants/action-types";

const intialState = {
  weather: [],
};

export const weatherReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WEATHER:
      return { ...state, weather: payload };
    default:
      return state;
  }
};
