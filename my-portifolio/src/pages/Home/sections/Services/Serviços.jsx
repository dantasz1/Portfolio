import undrawWeb from "../../../../assets/images/undrawWeb.svg"
import undrawSite from "../../../../assets/images/undrawSite.svg"
import undrawDesign from "../../../../assets/images/undrawDesign.svg"
import "./Serviços.css"

const Servicos  = () => {

    return (
        <>
    

<h2      className="Titulo-servico"> &lt; Serviços &gt;</h2>


<section className="servicos"  data-aos="zoom-in"   
     data-aos-easing="ease-out-cubic"
     data-aos-duration="10000">
<div className="cards">
<div className="card">
<img src={undrawWeb} alt="Imagem 1"/>
<div className="card-conteudo">
  <span>Desenvolvimento de websites.</span>
  <p>- Criação de websites modernos e responsivos seguindo o padrão de escolha do cliente</p>
</div>

</div>
<div className="card">
<img src={undrawDesign} alt="Imagem 2"/>
<div className="card-conteudo">
  <span>UI/UX.</span>
  <p>- Prototipagem Interativa</p>
  <p>- Arquitetura de Software</p>
  <p>- Design Interface</p>
  <p>- Documentação de Software</p>
</div>

</div>
<div className="card">
<img src={undrawSite} alt="Imagem 3"/>
<div className="card-conteudo">
  <span>Manutenção de sites.</span>
  <p>- Serviços de manutenção para garantir que seu site esteja sempre atualizado, seguro e funcionando corretamente, incluindo correções de bugs e otimização de desempenho.</p>
</div>

</div>
</div>
<hr className="linha-horizontal"/>

</section>
</>
    )

}

export default Servicos
