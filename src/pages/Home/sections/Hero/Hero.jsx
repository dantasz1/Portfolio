
import  "./Hero.css"
import Logo from "../../../../assets/images/logo.png"




 const Hero = () => {




  return (

   <section className="backGround1">

   
      <header >
        <nav className="nav " id="navbar">

          <div className="logo">
            <img src={Logo} alt="MinhaLogo" />
          </div>
          <ul className=" nav-list">
            <li><a href="#">Inicio</a></li>
            <li><a href="#"><>Sobre mim </></a></li>
            <li>  <a href="#"><>Projetos</></a></li>
            <li> <a href="#"><>Contato</></a></li>
            
    
          </ul>
        </nav>
      </header>
      </section>
    


  )
}
export default Hero