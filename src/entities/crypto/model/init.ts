import { CryptoInitState } from "./types";

const initialState: CryptoInitState = {
  cryptos: [],
  loading: false,
  error: null,
  sellCrypto: null,
  buyCrypto: null,
};

export { initialState };
