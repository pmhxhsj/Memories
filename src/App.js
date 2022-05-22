import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Main from './components/main/Main';

function App({ authService }) {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login authService={authService} />} />
          <Route path='/main' exact element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
