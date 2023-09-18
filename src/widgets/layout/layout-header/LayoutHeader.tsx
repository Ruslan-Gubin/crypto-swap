import { HeaderLeftSize } from './left-size/HeaderLeftSize';
import { HeaderRightSize } from './right-size/HeaderRightSize';
import { NavigationHeader } from './navigation/NavigationHeader';
import {  ContentContainer, LogoCryptoSVG, NavLink } from '@/shared';
import { MenuMobileList } from './menu-mobile-list/MenuMobileList';

import styles from './LayoutHeader.module.scss';

type Props = {
  links: NavLink[], companyName: string
}


const LayoutHeader = ({ links, companyName }: Props) => {

  return (
    <header className={styles.wrapper}>
      <ContentContainer>
      <section className={styles.container}>
      <div className={styles.container_left}>
      <HeaderLeftSize companyName={companyName} >
        <LogoCryptoSVG/>
        </HeaderLeftSize>
      <NavigationHeader navLinks={links}/>
      </div>
      <HeaderRightSize />
      </section>
      <MenuMobileList 
      navLinks={links}  
      />
      </ContentContainer>
    </header>
  );
};

export { LayoutHeader }