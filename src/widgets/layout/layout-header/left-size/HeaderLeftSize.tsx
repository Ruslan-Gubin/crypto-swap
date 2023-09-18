import { ReactNode } from "react";
import { LayoutMenuButton } from "../../layout-menu-butto/LayoutMenuButton";

import styles from "./HeaderLeftSize.module.scss";

type HeaderLeftSizeProps = {
  companyName: string;
  children: ReactNode;
};

const HeaderLeftSize = ({ companyName, children }: HeaderLeftSizeProps) => {
  return (
    <div className={styles.root}>
    <div className={styles.header_left__size}>
      {children}
    <h2 className={styles.description}>{companyName}</h2>
    </div>
    <div className={styles.menu}>
    <LayoutMenuButton />
    </div>
    </div>
  );
};

export { HeaderLeftSize };
