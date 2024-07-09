// src/pages/Home/Home.jsx


import About from "./sections/About/About.jsx";
import Contato from "./sections/Contato/Contato.jsx";
import Hero from "./sections/Hero/Hero.jsx"; // Importe corretamente o componente Hero
import Nav from "./sections/NavBar/Nav.jsx";
import Servicos from "./sections/Services/Serviços.jsx";
import Skills from "./sections/Skills/Skills.jsx";

const Home = () => {
  return (
    <div className="home">
      <Nav/>
      <Hero />
      <About/>
      <Skills/>
      <Servicos/>
      <Contato/>
      {/* Outros componentes ou conteúdo da página */}
    </div>
  );
};

export default Home;
