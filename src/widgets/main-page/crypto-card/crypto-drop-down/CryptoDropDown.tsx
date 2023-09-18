"use client";
import { useEffect, useRef, useState } from "react";
import { useChangeCryptos } from "@/entities/crypto/application";
import { DropArraySvg, ImageMain } from "@/shared";
import { CryptoModel } from "@/entities";

import styles from "./CryptoDropDown.module.scss";

type CryptoDropDownProps = {
  imageSrc: string;
  name: string;
  count: number;
  coins: CryptoModel[];
  variant: "sell" | "buy";
};

const CryptoDropDown = ({
  variant,
  imageSrc,
  count,
  name,
  coins,
}: CryptoDropDownProps) => {
  const { changeCrypto } = useChangeCryptos();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const clickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("click", clickOutside);
    return () => {
      window.document.removeEventListener("click", clickOutside);
    };
  }, []);

  const handleChangeCrypto = (coin: CryptoModel) => {
    changeCrypto(coin, variant);
  };

  return (
    <div className={styles.root}>
      <div
        ref={ref}
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.crypto_operation__body}
      >
        <div className={styles.crypto_operation__left}>
          <ImageMain
            src={imageSrc}
            alt={`img ${name}`}
            width={36}
            height={36}
            priority
          />
          <span className={styles.crypto_operation__crypto}>{name}</span>
          <div className={styles.drop_arrow}>
            <DropArraySvg />
          </div>
        </div>
        <span className={styles.crypto_operation__count}>{count}</span>
      </div>

      {isOpen && (
        <ul className={styles.down_coins__list}>
          {coins &&
            coins.map((coin, index) => (
              <div key={coin.CoinInfo.FullName}>
                  <li
                    onClick={() => handleChangeCrypto(coin)}
                    key={coin.CoinInfo.FullName}
                    className={styles.down_coins__item}
                    >
                    {coin.CoinInfo.FullName !== name && (
                      <>
                    <ImageMain
                      src={`https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                      alt={`img ${name}`}
                      width={36}
                      height={36}
                      priority={index === 0}
                      />
                    <span>{coin.CoinInfo.FullName}</span>
                      </>
                    )}
                  </li>
                  </div>
            ))}
        </ul>
      )}
    </div>
  );
};

export { CryptoDropDown };
