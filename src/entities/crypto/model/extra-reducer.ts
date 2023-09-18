import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchAllCrypto } from "./thunk";
import { CryptoInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<CryptoInitState>
) => {
  builder
    .addCase(fetchAllCrypto.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAllCrypto.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : null;
    })
    .addCase(fetchAllCrypto.fulfilled, (state, action) => {
      state.cryptos = action.payload

      state.sellCrypto = action.payload[0]
      state.buyCrypto = action.payload[1]
      
      state.loading = false;
      state.error = null;
    });
 
};
