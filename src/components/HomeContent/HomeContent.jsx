import styles from './HomeContent.module.css';
import wallpaper from '../../img/wallpaper.jpg';

const HomeContent = () => {
  return (
    <div>
      <img src={wallpaper} alt="Home wallpaper" className={styles.img} />
    </div>
  );
};

export default HomeContent;
