import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onLogout, authService }) => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <header className={styles.container}>
      <div className={styles.darkMode}></div>
      <div className={styles.mainLogo}>
        <img className={styles.logoImg} src='/images/goorm.png' alt='logo' />
        <h1 className={styles.title}>Memories</h1>
      </div>
      {onLogout ? (
        <button className={styles.logoutBtn} onClick={goToLoginPage}>
          Logout
        </button>
      ) : (
        <button className={styles.logoutBtn} onClick={onLogout}></button>
      )}
    </header>
  );
};

export default Header;
