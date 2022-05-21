import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log);
  };
  return (
    <div>
      <section>
        <Header />
        <section>
          <h1>Login</h1>
          <ul>
            <li>
              <button onClick={onLogin}>Google</button>
            </li>
            <li>
              <button onClick={onLogin}>Github</button>
            </li>
          </ul>
        </section>
        <Footer />
      </section>
    </div>
  );
};

export default Login;
