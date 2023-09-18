import { ArrowDown } from "@/shared";

import styles from "./CryptoArrow.module.scss";

const CryptoArrow = () => {
  return (
    <div className={styles.root}>
      <ArrowDown />
    </div>
  );
};

export { CryptoArrow };
