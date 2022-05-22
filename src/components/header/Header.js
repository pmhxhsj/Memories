import React from 'react';
import styles from './Header.module.css';

const Header = ({ onLogout }) => {
  // onLogout = true;
  return (
    <header className={styles.container}>
      <div className={styles.darkMode}></div>
      <div className={styles.mainLogo}>
        <img className={styles.logoImg} src='/images/goorm.png' alt='logo' />
        <h1 className={styles.title}>Memories</h1>
      </div>
      {onLogout ? (
        <button className={styles.logoutBtn} onClick={onLogout}>
          Logout
        </button>
      ) : (
        <button className={styles.logoutBtn} onClick={onLogout}></button>
      )}
    </header>
  );
};

export default Header;
