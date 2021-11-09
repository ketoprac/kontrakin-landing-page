import styles from "./Navbar.module.css";
import Link from "next/link";
import Head from "next/head"

const Navbar = ({title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className={styles.navbar}>
        <ul>
          <Link href="/"><li className={styles.navbar__title}>Kontrakin</li></Link>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
          <Link href="/gallery"><li>Gallery</li></Link>
          <Link href="/faq"><li>FAQ</li></Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
