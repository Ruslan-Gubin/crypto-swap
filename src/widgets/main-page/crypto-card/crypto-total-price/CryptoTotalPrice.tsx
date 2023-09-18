import { useCryptoGetTotalPrice } from "@/entities/crypto/application";
import { InfoSVG } from "@/shared";

import styles from "./CryptoTotalPrice.module.scss";

const CryptoTotalPrice = () => {
  const { getTotalCount, buyCrypto, sellCrypto } = useCryptoGetTotalPrice(4);

  return (
    <div className={styles.total_price}>
      <InfoSVG />
      <p>
        1 {sellCrypto?.CoinInfo.Name} = {getTotalCount}{" "}
        {buyCrypto?.CoinInfo.Name}{" "}
      </p>

      <span>({sellCrypto?.RAW.USD.PRICE})</span>
    </div>
  );
};

export { CryptoTotalPrice };
