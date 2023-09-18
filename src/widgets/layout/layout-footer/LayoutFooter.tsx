import { ContentContainer } from "@/shared";
import styles from "./LayoutFooter.module.scss";

type LayoutFooterProps = {
  copyright: string;
  arguements: string[];
}

const LayoutFooter = ({ copyright, arguements }: LayoutFooterProps) => {

  return (
      <ContentContainer>
    <footer className={styles.root}>
      <div>{copyright}</div>
      <div>{arguements.join(' | ')}</div>
    </footer>
      </ContentContainer>
  );
};

export { LayoutFooter };
