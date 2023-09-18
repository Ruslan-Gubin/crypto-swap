import { useEffect, useMemo } from "react";
import { getTotalCountInBuy,  useAppDispatch } from "../../../shared";
import { CryptoModel } from "../domen/crypto";
import { useCryptoSelect } from "../model";
import {cryptoAction} from '../model'
import { fetchAllCrypto } from "../model/thunk";


export function useFetchAllCryptos() {
  const { loading, error, cryptos } = useCryptoSelect()
  const dispatch = useAppDispatch()

useEffect(() => { 
  dispatch(fetchAllCrypto())
},[])


return { loading, error, cryptos }
}

export function useChangeCryptos() {
  const dispatch = useAppDispatch()

  const changeCrypto = (coins: CryptoModel, variant: 'buy' | 'sell') => {
    dispatch(cryptoAction.changeDropDownCrypto({ coins, variant }))
  }


return { changeCrypto }
}

export function useCryptoGetTotalPrice(fixed: number) {
  const { buyCrypto, sellCrypto } = useCryptoSelect()

  const getTotalCount = useMemo(() => {
    const buyPrice = buyCrypto?.RAW.USD.PRICE
    const sellPrice = sellCrypto?.RAW.USD.PRICE
    
    return getTotalCountInBuy(buyPrice, sellPrice, fixed)
  },[buyCrypto, sellCrypto])

return { getTotalCount, buyCrypto, sellCrypto }
}

