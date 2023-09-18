'use client'
import { useMenuSelect, useToggleMenu } from "@/features/menu";
import { useScreenSize } from "@/shared";
import { useCallback, useEffect } from "react";

import styles from "./LayoutMenuButton.module.scss";

const LayoutMenuButton = () => {
  const { isOpen } = useMenuSelect()
  const { width } = useScreenSize()
  const { handleToggleMenu } = useToggleMenu()

  
  const handleCheckMenuSizeDisplay = useCallback(() => {
    if (width < 990 || !isOpen) return;
    if (width > 990 && isOpen) {
      handleToggleMenu()
    }
  },[width, isOpen, handleToggleMenu])

  useEffect(() => {
    handleCheckMenuSizeDisplay()
  }, [handleCheckMenuSizeDisplay] )

  return (
    <button onClick={handleToggleMenu} className={styles.menu}>
      {!isOpen ? (
        <>
          <div className={styles.menu_close}></div>
          <div className={styles.menu_separator}></div>
        </>
      ) : (
        <>
        <div className={styles.menu_open__top}></div>
        <div className={styles.menu_open__bottom}></div>
        </>
      )}
    </button>
  );
};

LayoutMenuButton.displayName= 'LayoutMenuButton'

export { LayoutMenuButton };
