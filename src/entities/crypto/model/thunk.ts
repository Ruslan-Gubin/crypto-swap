import { createAppThunk } from '../../../shared';
import { CtyptoApi } from '../api/crypto_api';
import { CryptoModel } from '../domen/crypto';

export type CustomError = {
  errors: {
    message: string;
  }[];
};


export const fetchAllCrypto = createAppThunk('crypto/fetchAllCrypto', async(_, { rejectWithValue })  => {
  const response = await CtyptoApi.getAllCtypto<{Data: CryptoModel[]} | CustomError>()

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch  all crypto: ${response.errors[0].message}`)
  } 

  return response.Data
})






 


