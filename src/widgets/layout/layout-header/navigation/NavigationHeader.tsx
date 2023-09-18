"use client";
import { useCallback } from "react";
import { usePathname } from "next/navigation";
import {  NavigationLink, NavLink } from "@/shared";

import styles from "./NavigationHeader.module.scss";

type Props = {
  navLinks: NavLink[];
};

const NavigationHeader = ({ navLinks }: Props) => {
  const pathname = usePathname();

  const checkActive = useCallback(
    (href: string) => {
      return pathname === href;
    },
    [pathname]
  );

  return (
    <div className={styles.root}>

      <div className={styles.container}>
        <ul className={styles.link_list}>
          {navLinks.map((link) => (
            <li key={link.href} className={styles.link_list__item}>
              <NavigationLink
                isActive={checkActive(link.href)}
                key={link.href}
                link={link}
                />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.opasity_links}></div>
    </div>
  );
};

NavigationHeader.displayName = "NavigationHeader";

export { NavigationHeader };
