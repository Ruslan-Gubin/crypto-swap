import { CoughConnectSVG } from "@/shared";

import styles from "./CryptoConnectButton.module.scss";


const CryptoConnectButton = () => {

  return (
    <button className={styles.crypto_button}>
      <CoughConnectSVG />
      <span>Сonnect walley</span>
    </button>
  );
};

export { CryptoConnectButton };