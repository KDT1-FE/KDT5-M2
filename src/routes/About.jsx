import styles from '~/styles/About.module.scss';

export default function About() {
  return (
    <div className={styles.wrap}>
      <div className={styles.profile}>
        <img src="/assets/pic1.jpg" alt="profile pic" className="card-img" />
      </div>
      <div>tjehddnr997@gmail.com</div>
      <a href="https://github.com/foodeco" target="_blank" rel="noreferrer">
        github.com/foodeco
      </a>
      <div>+82-10-7126-6578</div>
    </div>
  );
}
