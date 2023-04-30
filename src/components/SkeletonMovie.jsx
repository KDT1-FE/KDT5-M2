import styles from '../common/skeletonMovie.module.scss';

export default function SkeletonMovie() {
  return (
    <div className={`${styles.wrap}`}>
      <div className={styles.image}></div>
      <div className={styles.details}>
        <div className={styles.name}></div>
        <div className={styles.running}></div>
        <div className={styles.story}></div>
        <div className={styles.smallBox}>
          <div className={styles.head}></div>
          <div className={styles.body}></div>
        </div>
        <div className={styles.smallBox}>
          <div className={styles.head}></div>
          <div className={styles.body}></div>
        </div>
        <div className={styles.smallBox}>
          <div className={styles.head}></div>
          <div className={styles.body}></div>
        </div>
        <div className={styles.smallBox}>
          <div className={styles.head}></div>
          <div className={styles.body}></div>
        </div>
        <div className={styles.smallBox}>
          <div className={styles.head}></div>
          <div className={styles.body}></div>
        </div>
      </div>
    </div>
  );
}
