import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <>
      <Navbar title="Kontrakin | About" />
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <h1>About</h1>
          <p>Any question or remarks? Just leave us a message!</p>
          <form className={styles.contactForm} action="">
          <input type="email" placeholder="Your Email" />
          <textarea type="text" placeholder="Your message here..." />
          <button className={styles.buttonPrimary}>Send Message</button>
          </form>
        </div>
        <div className={styles.header__right}>
        <div className={styles.ball1}></div>
        <div className={styles.ball}></div>
          <p>Content</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default about;
