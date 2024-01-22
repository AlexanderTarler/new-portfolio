import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.profileImageContainer}>
        <Image
          src="/images/profile_picture.png"
          alt="Alexander Tarler"
          width={200} // Set the width to the size of the image you want to display
          height={200} // Set the height to the same value to maintain aspect ratio for a circle
          layout="intrinsic" // Use "fixed" if the image should not resize with the viewport
        />
      </div>
      <h1 className={styles.aboutHeader}>About Me</h1>
      <section className={styles.intro}>
        <h2 className={styles.subheader}>Who&apos;s this guy?</h2>
        <p className={styles.paragraph}>
          Hello! I&apos;m Alexander Tarler, a passionate and dedicated Developer
          with a focus on full-stack development. With over a year of experience
          in the tech industry, I&apos;ve honed my skills in TypeScript, C#, and
          React/Next.js, building dynamic and user-friendly web applications.
        </p>
      </section>
      <section className={styles.journey}>
        <h2 className={styles.subheader}>My Journey into Development</h2>
        <p className={styles.paragraph}>
          My fascination with building things began with my first LEGO set,
          sparking a joy in planning, considering details, and assembling
          something from scratch. This childhood curiosity seamlessly
          transitioned into my passion for programming. The day I discovered
          coding, I knew I had found my calling. What started with online
          courses soon turned into a full-fledged career in full-stack
          development. I graduated from an intensive coding bootcamp in the
          spring of &apos;23, where I mastered JavaScript/TypeScript and
          React/Next.js, and learned the essence of collaboration and teamwork.
        </p>
      </section>
      <section className={styles.connect}>
        <h2 className={styles.subheader}>Professional Highlights</h2>
        <p className={styles.paragraph}>
          My professional journey includes developing a Swedish accounting web
          application and a CV-creator web app. While I&quot;m yet to win
          accolades specifically in coding, I bring a creative edge to my
          technical work, evident from my accomplishment of self-publishing a
          fantasy novel titled{" "}
          <Link
            href={
              "https://www.amazon.se/Grave-Mistake-Alexander-Tarler/dp/1981046011"
            }
          >
            A Grave Mistake
          </Link>
          .
        </p>
      </section>
      <section className={styles.connect}>
        <h2 className={styles.subheader}>My Approach</h2>
        <p className={styles.paragraph}>
          I approach every task with a two-step strategy: first, ensure
          functionality, and then, beautify it. I firmly believe that every
          challenge can be overcome; it&apos;s just a matter of how. This
          philosophy, coupled with my experience in agile environments and keen
          problem-solving skills, has shaped me into a developer who is not just
          efficient but also adaptable and creative.
        </p>
      </section>
      <section className={styles.connect}>
        <h2 className={styles.subheader}>Beyond Coding</h2>
        <p className={styles.paragraph}>
          When I&apos;m not coding, I immerse myself in the world of tabletop
          role-playing games and gaming. I&apos;m also an avid writer and enjoy
          keeping fit. These hobbies not only keep me balanced but also fuel my
          creativity in professional endeavors.
        </p>
      </section>
      <section className={styles.connect}>
        <h2 className={styles.subheader}>Let&apos;s Connect</h2>
        <p className={styles.paragraph}>
          I believe in building solutions that make a difference and am always
          on the lookout for new challenges and opportunities to grow. If
          you&apos;re interested in collaborating or just want to say hi, feel
          free to reach out through my website&apos;s{" "}
          <Link href={"/contact"}>contact form</Link>. Your message will
          directly land in my inbox, and I&apos;ll be sure to get back to you.
          Looking forward to connecting with you!
          <p>Best regards, Alexander Tarler</p>
        </p>
      </section>
    </div>
  );
};

export default About;
