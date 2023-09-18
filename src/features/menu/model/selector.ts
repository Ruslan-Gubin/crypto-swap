import { useAppDispatch, useAppSelector } from "@/shared";
import { menuSlice } from "./slice";


const menuSelect = (state: RootState) => state.menu;
const menuAction = menuSlice.actions;
export const menuReducer = menuSlice.reducer;

export const useMenuSelect = () => {
  return useAppSelector(menuSelect);
};

export const useToggleMenu = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useMenuSelect()

  const handleToggleMenu = () => {
    dispatch(menuAction.toggleMenu())

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return {
    handleToggleMenu,
  };
};

