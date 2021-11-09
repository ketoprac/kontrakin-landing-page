import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';

const contact = () => {
  return (
    <>
    <Navbar title="Kontrakin | Contact" />
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <h1>Contact us</h1>
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
          <Image className={styles.image} src="/assets/Contact.svg" alt="Home" height="480" width="480"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default contact
