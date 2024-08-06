import { useState } from 'react';
import Logo from '../../../../assets/images/logo.png';
import './Nav.css';
import { Link } from 'react-scroll';

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
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={-1000} duration={1000} >&lt;Home&gt;</Link>
        </li>
        <li id="link2" className="link">
          <Link activeClass="active" to="Andre" spy={true} smooth={true} offset={-100} duration={1000} >&lt;Sobre Mim&gt;</Link>
        </li>
        <li id="link3" className="link">
          <Link activeClass="active" to="projetos" spy={true} smooth={true} offset={-100} duration={1000} >&lt;Projetos&gt;</Link>
        </li>
        <li id="link4" className="link">
          <Link activeClass="active" to="myself" spy={true} smooth={true} offset={50} duration={1000} >&lt;Contato&gt;</Link>
        </li>
      </ul>
      <button id="hamburger" className="fa fa-bars" onClick={toggleMenu}></button>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li id="link1">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-1000} duration={1000} onClick={toggleMenu}>&lt;Inicio&gt;</Link>
          </li>
          <li id="link2">
            <Link activeClass="active" to="Andre" spy={true} smooth={true} offset={-100} duration={1000} onClick={toggleMenu}>&lt;Sobre mim&gt;</Link>
          </li>
          <li id="link3">
            <Link activeClass="active" to="projetos" spy={true} smooth={true} offset={-100} duration={1000} onClick={toggleMenu}>&lt;Projetos&gt;</Link>
          </li>
          <li id="link4">
            <Link activeClass="active" to="myself" spy={true} smooth={true} offset={50} duration={1000} onClick={toggleMenu}>&lt;Contato&gt;</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
