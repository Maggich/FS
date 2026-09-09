import styles from "./ProfileCard.module.css";

function ProfileCard() {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Maga</h2>
      <p className={styles.text}>Frontend student</p>
    </section>
  );
}

export default ProfileCard;