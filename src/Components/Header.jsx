import { Link } from "react-router-dom";
import Dogs from "../Assets/dogs.svg?react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </div>
  );
};

export default Header;
