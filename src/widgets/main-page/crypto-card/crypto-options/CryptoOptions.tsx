"use client";
import { useState } from "react";

import styles from "./CryptoOptions.module.scss";

type CryptoOptionsProps = {
  options: string[];
};

const CryptoOptions = ({ options }: CryptoOptionsProps) => {
  const [optionsValue, setOptionsValue] = useState<string>(options[0]);

  const handleChangeOption = (option: string) => {
    setOptionsValue(option);
  };

  return (
    <ul className={styles.options_list}>
      {options.map((option) => (
        <li
          key={option}
          onClick={() => handleChangeOption(option)}
          className={
            optionsValue === option
              ? `${styles.options_list__item} ${styles.options_list__active}`
              : styles.options_list__item
          }
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export { CryptoOptions };
