import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Faq.module.css";


export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
    <Navbar title="Kontrakin | FAQ" />
    <div className={styles.container}>
      <div className={styles.header}>
          <h1>Frequently Asked Questions</h1>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        <div className={styles.ball1}></div>
        <div className={styles.ball}></div>
      </div>
    </div>
    </>
  );
}
