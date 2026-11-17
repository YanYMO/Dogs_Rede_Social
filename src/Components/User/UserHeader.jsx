import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav";

const UserHeader = () => {
  const location = useLocation();
  let title = "Minha conta";

  if (location.pathname === "/conta/estatisticas") {
    title = "Estatísticas";
  } else if (location.pathname === "/conta/postar") {
    title = "Postar Foto";
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav></UserHeaderNav>
    </header>
  );
};

export default UserHeader;
