import { TITLE_CHANGE } from "../actions/post";
import { CHANGE_THEME } from "../actions/theme";

const initialState = {
  theme: 'day'
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
};
