import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import Connexion from './Connexion';
import './App.css';

function Navigation() {
  const location = useLocation();

  return (
    <div className="nav-container">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            🏠 Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/apropos" 
            className={location.pathname === '/apropos' ? 'nav-link active' : 'nav-link'}
          >
            ℹ️ À propos
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            📞 Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="content-container">
        <div className="titre-container">
          <h1 className="titre-simple">Mon Application React</h1>
        </div>
        
        <Navigation />
        
        <Connexion />
        
        <div className="page-transition">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
