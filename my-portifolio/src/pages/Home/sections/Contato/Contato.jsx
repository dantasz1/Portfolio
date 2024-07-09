import "../Contato/Contato.css";
import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [messagem, setMensagem] = useState("");

  return(

<section className="contato">
<div className="textosContato">
<h2>Precisa de um <span id="textoDev">Desenvolvedor Júnior?</span></h2>
<h3>Vamos trabalhar juntos!</h3>
        </div>
 <form className="form">
<input className="input" 
type="text" 
placeholder="Digite seu nome " 
onChange={(e) => setNome(e.target.value)} value={nome} />

<input type="text"  
placeholder="Digite seu Email" 
onChange={(e) => setEmail(e.target.value)}
 value={email}/>

<input type="text" placeholder="Digite uma mensagem" onChange={(e) => setMensagem(e.target.value)} value={messagem} />
 </form>

</section>

  ) 
}

export default Contato;
