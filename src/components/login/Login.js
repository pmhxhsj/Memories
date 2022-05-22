import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Login.module.css';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log);
  };
  return (
    <div>
      <section>
        <Header className={styles.header} />
        <section className={styles.container}>
          <h1 className={styles.title}>Login</h1>
          <ul className={styles.loginContainer}>
            <li>
              <button onClick={onLogin}>Google</button>
            </li>
            <li>
              <button onClick={onLogin}>Github</button>
            </li>
          </ul>
        </section>
        <Footer className={styles.footer} />
      </section>
    </div>
  );
};

export default Login;
