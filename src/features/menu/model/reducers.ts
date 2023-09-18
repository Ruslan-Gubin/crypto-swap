import { MenuInitState } from "./types";

export const reducers = {

  toggleMenu(state: MenuInitState) {
    state.isOpen = !state.isOpen
  },

};
