import { useAppSelector } from "../../../shared";
import { cryptoSlice } from "./slice";

const cryptoSelect = (state: RootState) => state.crypto;
export const cryptoAction = cryptoSlice.actions;
export const cryptoReducer = cryptoSlice.reducer;

export const useCryptoSelect = () => {
  return useAppSelector(cryptoSelect);
};
