import undrawWeb from "../../../../assets/images/undrawWeb.svg"
import undrawSite from "../../../../assets/images/undrawSite.svg"
import undrawDesign from "../../../../assets/images/undrawDesign.svg"
import "./Serviços.css"

const Servicos  = () => {

    return (
        <>
    
<div className="Titulo-servico">
<h5>Serviços</h5>
</div>

<section className="servicos">
<div className="cards">
<div className="card">
<img src={undrawWeb} alt="Imagem 1"/>
<div className="card-conteudo">
  <h3>Desenvolvimento de websites.</h3>
  <p>- Criação de websites modernos e responsivos seguindo o padrão de escolha do cliente</p>
</div>

</div>
<div className="card">
<img src={undrawDesign} alt="Imagem 2"/>
<div className="card-conteudo">
  <h3>UI/UX.</h3>
  <p>- Prototipagem Interativa</p>
  <p>- Arquitetura de Software</p>
  <p>- Design Interface</p>
  <p>- Documentação de Software</p>
</div>

</div>
<div className="card">
<img src={undrawSite} alt="Imagem 3"/>
<div className="card-conteudo">
  <h3>Manutenção de sites.</h3>
  <p>- Serviços de manutenção para garantir que seu site esteja sempre atualizado, seguro e funcionando corretamente, incluindo correções de bugs e otimização de desempenho.</p>
</div>

</div>
</div>
</section>
</>
    )

}

export default Servicos
