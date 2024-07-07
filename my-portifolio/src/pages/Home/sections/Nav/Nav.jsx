import "../Hero/Hero.css";
import Logo from "../../../../assets/images/logo.png";


const Nav = () => {
return (
<nav className="nav" id="navbar">
    <div className="nav-logo">
      <img src={Logo} alt="MinhaLogo" />
    </div>
    <ul className="nav-links">
      <li  id= "link1"  className="link">
        <a href="#">&lt;Inicio&gt;</a>
      </li>
      <li id= "link2"   className="link">
        <a href="#">&lt;Sobre mim&gt;</a>
      </li>
      <li id= "link3"  className="link">
        <a href="#">&lt;Projetos&gt;</a>
      </li>
      
    </ul>
  
  </nav>

)
    

}

export default Nav 