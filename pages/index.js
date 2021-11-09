import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
    <Navbar title="Kontrakin | Homepage" />
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <h1>Kontrakin</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            officia illo a temporibus repellendus similique sint recusandae.
            Corrupti reprehenderit, blanditiis, nisi magni voluptates facilis
            eum rem, ipsa voluptas minus ratione lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet.
          </p>
          <button className={styles.buttonPrimary}>Sewa Sekarang</button>
        </div>
        <div className={styles.header__right}>
        <div className={styles.ball1}></div>
        <div className={styles.ball}></div>
          <Image className={styles.image} src="/assets/Home.svg" alt="Home" height="480" width="480"/>
        </div>
      </div>
      <div className={styles.playstore}>
        <Image className={styles.playstoreButton} src="/assets/google-play-badge.png" alt="Google Play Button" width="150%" height="150%" objectFit="contain" />
      </div>
    </div>
    </>
  );
}
