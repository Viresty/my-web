import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import {useEffect} from 'react';

import Home from './pages/home';
import Login from './pages/login';
import Library from './pages/library';
import Play from './pages/play';

import Header from './components/header';
  
const App = () => {
  useEffect(() => {
    const handleScroll = event => {
        if (window.scrollY >= 10) {
            document.getElementById('header-container').style.backgroundColor = '#282c34';
            document.getElementById('header-container').style.fontSize = '1rem';
            document.getElementById('header-content').style.height = '5em';
            document.getElementById('App-logo').style.height = '4em';
        } else {
            document.getElementById('header-container').style.backgroundColor = '';
            document.getElementById('header-container').style.fontSize = '1.1rem';
            document.getElementById('header-content').style.height = '6em';
            document.getElementById('App-logo').style.height = '5em';
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <HashRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/library" element={<Library />} />
            <Route path="/play" element={<Play />} />
        </Routes>
      </HashRouter>
  );
}
  
export default App;