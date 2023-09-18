import { ImageMain } from '../image-main/ImageMain';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader}>
        <ImageMain 
        src='/loader.png'
        width={100}
        height={100}
        priority
        alt='Loader image'
        />
        </div>
    </div>
  );
};

export { Loader };