import { CryptoModel } from "../domen/crypto";

export type CryptoInitState = {
  cryptos: CryptoModel[];
  loading: boolean;
  error: string | null;
  sellCrypto: CryptoModel | null;
  buyCrypto: CryptoModel | null;
};




