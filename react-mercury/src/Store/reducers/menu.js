import { SHOW_MENU, HIDE_MENU } from '../constants/menu';

const initialState = {
  menu: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        menu: true
      };
    case HIDE_MENU:
      return {
        ...state,
        menu: false
      };
    default:
      return state;
  }
};
