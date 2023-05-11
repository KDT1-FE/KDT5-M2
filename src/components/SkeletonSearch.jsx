import styles from '~/common/skeletonSearch.module.scss';
export default function SkeletonSearch({ items }) {
  const arr = Array.from({ length: items });
  return (
    <div className={styles.items}>
      {arr.map((_, i) => (
        <div key={i} />
      ))}
    </div>
  );
}
