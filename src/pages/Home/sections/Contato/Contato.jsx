import "../Contato/Contato.css";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState({});

  function enviarEmail(e) {
    e.preventDefault();
    const newErrors = {};

    if (nome === '') {
      newErrors.nome = "Preencha este campo";
    }
    if (email === '') {
      newErrors.email = "Preencha este campo";
    }
    if (mensagem === '') {
      newErrors.mensagem = "Preencha este campo";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const template = {
        from_name: nome,
        message: mensagem,
        email: email,
      };

      emailjs.send("service_2ipkjyf", "template_ie5b8t9", template, "F8K-054qkhnVmbmBv")
        .then((resposta) => {
          console.log("Email enviado", resposta.status, resposta.text);
          setNome('');
          setEmail('');
          setMensagem('');
        }, (err) => {
          console.log("ERRO:", err);
        });
    }
  }

  return (
    <>
      <section id="myself">
        <hr />
        <div className="container">
          <div className="textosContato">
            <span>
              Precisa de um <span className="textoDev">Desenvolvedor Júnior?</span>
            </span>
            <span>Vamos trabalhar juntos!</span>
          </div>
          
          <h1 className="title">Contato</h1>

          <form className="form" onSubmit={enviarEmail}>
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              className={`input ${errors.nome ? "input-error" : ""}`}
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
            {errors.nome && <span className="error-message">{errors.nome}</span>}
            
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className={`input ${errors.email ? "input-error" : ""}`}
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              className={`textarea ${errors.mensagem ? "textarea-error" : ""}`}
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
            />
            {errors.mensagem && <span className="error-message">{errors.mensagem}</span>}

            <input className="button" type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contato;
