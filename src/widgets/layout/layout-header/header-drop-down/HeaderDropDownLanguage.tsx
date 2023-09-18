"use client";
import { DropArraySvg, LanguageSVG } from "@/shared";
import { useEffect, useRef, useState } from "react";

import styles from "./HeaderDropDownLanguage.module.scss";

type HeaderDropDownLanguageProps = {
  languages: string[];
}

const HeaderDropDownLanguage = ({ languages }: HeaderDropDownLanguageProps) => {
  const [languageValue, setLanguageValue] = useState<string>(languages[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChangeLanguage = (language: string) => {
    setLanguageValue(language)
  }

  const handleToggleDown = () => {
    setIsOpen((prev) => !prev)
  }

  const clickOutside = (e: MouseEvent) => {
    if (!ref.current) return;

    if (!ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      onClick={handleToggleDown}
      className={styles.root}
    >
      <div className={styles.value}>
        <LanguageSVG />
        <span>{languageValue}</span>
        <DropArraySvg />
      </div>
      {isOpen && (
        <div className={styles.down_container}>
          <ul>
            {languages.map((language) => (
              <li
                onClick={() => handleChangeLanguage(language)}
                key={language}
                className={languageValue === language ? styles.active : ""}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { HeaderDropDownLanguage };
