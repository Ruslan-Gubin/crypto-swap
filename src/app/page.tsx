import { CryptoCard } from "@/widgets";

import styles from "./styles/pages/Home.module.scss";

export default async function Home() {
  return (
    <section className={styles.main}>
      <CryptoCard />
    </section>
  );
}
