"use client";
import { memo } from "react";
import Link from "next/link";
import styles from "./NavigationLink.module.scss";

type Props = {
  link: { href: string; label: string };
  onClick?: (value: string) => void;
  isActive: boolean;
};

const NavigationLink = memo(({ link, onClick, isActive }: Props) => {


  return (
    <Link
      key={link.label}
      href={link.href}
      className={isActive ? `${styles.link} ${styles.active}` : styles.link}
      onClick={() => onClick && onClick(link.label)}
    >
      {link.label}
    </Link>
  );
});

NavigationLink.displayName = "NavigationLink";

export { NavigationLink };
