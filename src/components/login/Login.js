import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMainPage = (userId) => {
    navigate(
      //
      '/main',
      { state: { id: userId } }
    );
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMainPage(data.user.uid));
  };
  return (
    <div>
      <section>
        <Header className={styles.header} />
        <section className={styles.container}>
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
