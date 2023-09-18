import type { ReactNode } from "react";

import styles from "./HeaderButton.module.scss";

type HeaderButtonProps = {
  description: string;
  children: ReactNode;
}

const HeaderButton = ({ description, children }: HeaderButtonProps) => {

  return (
    <button className={styles.root}>
      {children}
      <span>{description}</span>
    </button>
  );
};

export  {HeaderButton};