
import { CryptoModel } from "@/entities";
import { DropArraySvg, ImageMain } from "@/shared";
import { CryptoDropDown } from "../crypto-drop-down/CryptoDropDown";
import styles from "./CryptoOperationCard.module.scss";

type Props = {
  variant: 'sell' | 'buy'
  cost: number;
  count: number;
  imageSrc: string;
  name: string;
  coins: CryptoModel[];
}

const CryptoOperationCard = ({ coins, cost, count,  variant,  imageSrc, name }: Props) => {

  return (
    <div className={variant === 'buy' ? `${styles.crypto_operation} ${styles.background_buy}` : styles.crypto_operation}>
      <h2 className={styles.crypto_operation__title}>
        {variant === 'sell' ? 'Вы продаете' : 'Вы покупаете'}
        </h2>
        <CryptoDropDown
          imageSrc={imageSrc}
          name={name}
          count={count}
          coins={coins}
          variant={variant}
         />
        <div className={styles.crypto_operation__footer}>
        <span className={styles.crypto_operation__name}>{name}</span>
        <span className={styles.crypto_operation__cost}>~${cost}</span>
        </div>
    </div>
  );
};

export {CryptoOperationCard};