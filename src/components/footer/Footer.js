import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
  const emailClick = () => {
    alert('pmhxxhsj@gmail.com');
  };
  return (
    <footer className={styles.footer}>
      <p>
        <span onClick={emailClick}>Email</span> &nbsp;|&nbsp;
        <a href='https://parkparkpark.tistory.com/' target='_blank' rel='noopener noreferrer'>
          Blog
        </a>
        &nbsp;|&nbsp;
        <a href='https://github.com/pmhxhsj' target='_blank'>
          Github
        </a>
        <br />
        <span>Copyright 2022. Keny. All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
