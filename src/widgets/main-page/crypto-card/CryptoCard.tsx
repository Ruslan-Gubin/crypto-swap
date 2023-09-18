'use client'
import { CryptoArrow } from "./crypto-arrow/CryptoArrow";
import { CryptoConnectButton } from "./crypto-connect-button/CryptoConnectButton";
import { CryptoOperationCard } from "./crypto-operation-card/CryptoOperationCard";
import { CryptoOptions } from "./crypto-options/CryptoOptions";
import { CryptoTotalPrice } from "./crypto-total-price/CryptoTotalPrice";
import { useCryptoGetTotalPrice, useFetchAllCryptos } from "@/entities/crypto/application";
import {  Loader } from "@/shared";

import styles from "./CryptoCard.module.scss";

const options = ["Swap", "Pools"];

const CryptoCard = () => {
  const { cryptos, error, loading } = useFetchAllCryptos()
  const { getTotalCount, buyCrypto, sellCrypto } = useCryptoGetTotalPrice(6)

  if (loading) {
    return (<Loader />)
  }
  
  if (error) {
    return (<div>{error}</div>)
  }
  

  return (
    <div className={styles.root}>
      <CryptoOptions options={options} />

    {sellCrypto &&
      <CryptoOperationCard
      variant="sell"
      cost={sellCrypto?.RAW.USD.PRICE}
      count={1}
      name={sellCrypto.CoinInfo.FullName}
      imageSrc={`https://cryptocompare.com/${sellCrypto?.CoinInfo.ImageUrl}`}
      coins={cryptos}
      />
    }
      <CryptoArrow />
      {buyCrypto && 
      <CryptoOperationCard
      variant="buy"
      cost={buyCrypto.RAW.USD.PRICE}
      count={Number(getTotalCount)}
      name={buyCrypto.CoinInfo.FullName}
      imageSrc={`https://cryptocompare.com/${buyCrypto?.CoinInfo.ImageUrl}`}
      coins={cryptos}
      />
    }
      <CryptoTotalPrice />
      <CryptoConnectButton />
    </div>
  );
};

export { CryptoCard };
