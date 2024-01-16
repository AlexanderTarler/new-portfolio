// Import the CSS module<p className={styles.paragraph}>
import styles from "../../styles/About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.aboutHeader}>About Me</h1>
      <section className={styles.intro}>
        <h2 className={styles.subheader}>Alexander Tarler, Developer</h2>
        <p className={styles.paragraph}>
          Hello and welcome to my portfolio! I&apos;m Alexander Tarler, a
          passionate and dedicated Developer...
        </p>
      </section>
      <section className={styles.journey}>
        <h2 className={styles.subheader}>My Journey into Development</h2>
        <p className={styles.paragraph}>
          My fascination with building things began with my first LEGO set...
        </p>
      </section>
      <section className={styles.connect}>
        <h2 className={styles.subheader}>Let&apos;s Connect</h2>
        <p className={styles.paragraph}>
          I believe in building solutions that make a difference...
        </p>
      </section>
    </div>
  );
};

export default About;
