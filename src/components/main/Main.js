import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Main = ({ authService }) => {
  return (
    <div>
      <Header onLogout={true} authService={authService} />
      <Footer />
    </div>
  );
};

export default Main;
