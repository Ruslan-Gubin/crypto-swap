import { CoughSVG, DecimalSVG } from "@/shared";
import { HeaderButton } from "../header-button/HeaderButton";
import { HeaderDropDownLanguage } from "../header-drop-down/HeaderDropDownLanguage";

import styles from "./HeaderRightSize.module.scss";

const HeaderRightSize = () => {

  return (
    <div className={styles.header_info_right}>
      <HeaderDropDownLanguage languages={['RU','ENG']} />
      <HeaderButton description='Decimal'>
        <DecimalSVG />
      </HeaderButton>
      <HeaderButton description='Connect wallet'>
        <CoughSVG />
      </HeaderButton>
      <div className={styles.menu_mobile}>
      </div>
    </div>
  );
};

export { HeaderRightSize };
