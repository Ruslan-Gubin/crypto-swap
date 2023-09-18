import { Poppins } from 'next/font/google'
import type { Metadata } from "next";
import { Providers } from "@/store/provider";
import { LayoutFooter,  LayoutHeader } from "@/widgets";
import { CONFIG_APP } from "@/shared";
import "./styles/globals.scss";

const inter = Poppins({ weight: ['400','500', '700'], subsets: ['latin'], style: ['normal', 'italic'] })

import styles from './styles/pages/Layout.module.scss'; 

export const metadata: Metadata = CONFIG_APP.META_TAGS.homePage;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = CONFIG_APP.LINKS

  return (
    <html lang="ru" className={inter.className}>
      <body className={styles.body}>
        <div className={styles.container}>
      <Providers>
      <LayoutHeader 
      links={links} 
      companyName={CONFIG_APP.COMPANY_NAME} 
      />
      <main className={styles.main}>
        {children}
      </main>
      <LayoutFooter
      copyright='Copyright. @ 2023 Corp Name Все права защищены'
      arguements={['Пользовательское соглашение', 'Политика конфиденциальности']}
      />
      </Providers>
        </div>
        </body>
    </html>
  );
}
