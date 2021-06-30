import { ActionTypes } from "../constants/action-types";

export const setWeathers = (weathers) => {
  return {
    type: ActionTypes.SET_WEATHER,
    payload: weathers,
  };
};
