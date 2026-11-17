import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdicionarFoto from "../../Assets/adicionar.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import MinhasFotos from "../../Assets/feed.svg?react";
import Sair from "../../Assets/sair.svg?react";
import useMedia from "../../Hooks/useMedia";
import { UserContext } from "../../UserContext";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  function handleLogout() {
    setMobileMenu(false);
    userLogout();
    navigate("/login");
  }

  function closeMobileMenu() {
    if (mobile) setMobileMenu(false);
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}
      >
        <NavLink to="/conta" end onClick={closeMobileMenu}>
          <MinhasFotos /> {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" onClick={closeMobileMenu}>
          <Estatisticas /> {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar" onClick={closeMobileMenu}>
          <AdicionarFoto /> {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair /> {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
