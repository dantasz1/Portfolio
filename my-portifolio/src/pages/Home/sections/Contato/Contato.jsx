import "../Contato/Contato.css";
import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [messagem, setMensagem] = useState("");

  return(
<section className="contato">
<div className="textosContato">
<h2>Precisa de um Desenvolvedor Júnior?</h2>
<h3>Vamos trabalhar juntos!</h3>
        </div>
 <form className="form">
<input className="input" 
type="text" 
placeholder="Digite seu nome " 
onChange={(e) => setNome(e.target.value)} />


 </form>

</section>

  ) 
}

export default Contato;
