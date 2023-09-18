import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { CryptoInitState } from "./types";
import { CryptoModel } from '../domen/crypto'

export const reducers = {
  changeDropDownCrypto(state: CryptoInitState, action: PayloadAction<{coins: CryptoModel, variant: 'buy' | 'sell'}>) {
    if (action.payload.variant === 'buy') {
      state.buyCrypto = action.payload.coins
    } else {
      state.sellCrypto = action.payload.coins
    }
  },
};
