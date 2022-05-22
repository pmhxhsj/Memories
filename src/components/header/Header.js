import React from 'react';
import styles from './Header.module.css';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.container}>
      {onLogout && <button onClick={onLogout}>Logout</button>}
      <img className={styles.logoImg} src='/images/goorm.png' alt='logo' />
      <h1 className={styles.title}>Memories</h1>
    </header>
  );
};

export default Header;
