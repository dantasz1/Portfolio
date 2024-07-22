import { useState } from 'react';
import Logo from '../../../../assets/images/logo.png';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="MinhaLogo" />
      </div>
      <ul className="nav-links">
        <li id="link1" className="link">
          <a href="#">&lt;Inicio&gt;</a>
        </li>
        <li id="link2" className="link">
          <a href="#">&lt;Sobre mim&gt;</a>
        </li>
        <li id="link3" className="link">
          <a href="#">&lt;Projetos&gt;</a>
        </li>
        <li id="link4" className="link">
          <a href="#">&lt;Contato&gt;</a>
        </li>
      </ul>
      <button id="hamburger" className="fa fa-bars" onClick={toggleMenu}></button>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <li id="link1"><a href="/">&lt;Inicio&gt;</a></li>
        <li id="link2"><a href="/">&lt;Sobre mim&gt;</a></li>
        <li id="link3"><a href="/">&lt;Projetos&gt;</a></li>
        <li id="link4"><a href="/">&lt;Contato&gt;</a></li>
      </div>
    </nav>
  );
};

export default Nav;
