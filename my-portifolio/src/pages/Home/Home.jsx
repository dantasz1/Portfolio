// src/pages/Home/Home.jsx


import About from "./sections/About/About.jsx";
import Hero from "./sections/Hero/Hero.jsx"; // Importe corretamente o componente Hero
import Nav from "./sections/Nav/Nav.jsx";


const Home = () => {
  return (
    <div className="home">
      <Nav/>
      <Hero />
      <About/>
      
      {/* Outros componentes ou conteúdo da página */}
    </div>
  );
};

export default Home;
