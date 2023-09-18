"use client";
import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { NavigationLink, NavLink } from "@/shared";
import { useMenuSelect, useToggleMenu } from "@/features/menu";

import styles from "./MenuMobileList.module.scss";

type Props = {
  navLinks: NavLink[];
};

const MenuMobileList = ({ navLinks }: Props) => {
  const { handleToggleMenu } = useToggleMenu();
  const { isOpen } = useMenuSelect();
  const pathname = usePathname();

  const checkActive = useCallback(
    (href: string) => {
      return pathname === href;
    },
    [pathname]
  );

  return (
    <section
      className={
        isOpen
          ? `${styles.active} ${styles.root}`
          : `${styles.close} ${styles.root}`
      }
    >
      <div className={styles.content}>
        <ul className={styles.link_list}>
          {navLinks.map((link) => (
            <li
              onClick={handleToggleMenu}
              key={link.href}
              className={styles.link_list__item}
            >
              <NavigationLink
                isActive={checkActive(link.href)}
                key={link.href}
                link={link}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { MenuMobileList };
