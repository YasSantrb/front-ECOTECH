import React from "react";
import '../styles/tela_login.css';
import logo from '../assets/imagens/Logo.png';
import planeta from '../assets/imagens/planeta-login.png';
import iconEmail from '../assets/imagens/icon-email.png';
import iconSenha from '../assets/imagens/icon-senha.png';

function TelaLogin() {
  return (
    <div className="tela_login">
      <img
        src="src/assets/imagens/fundo_tela_login.png"
        alt="imagem_de_fundo"
        className="background_tela"
      />

      <div className="login-box">
        <div className="formulario">
          <div className="logo-container">
            <img src={logo} alt="logo_ecotech" className="logo" />
          </div>

          <form>
            <label>Email</label>
            <div className="input-container">
              <input type="email" placeholder="Insira seu email*" required />
              <img src={iconEmail} alt="ícone email" className="input-icon" />
            </div>

            <label>CPF</label>
            <div className="input-container">
              <input type="text" placeholder="Insira seu CPF ou CNPJ*" required />
            </div>

            <label>Senha</label>
            <div className="input-container">
              <input type="password" placeholder="Insira sua senha*" required />
              <img src={iconSenha} alt="ícone senha" className="input-icon" />
            </div>

            <button type="submit">Enviar</button>
          </form>

          <p className="Cadastro">
            Ainda não é cadastrado? <a href="/cadastro">Cadastre-se</a>
          </p>
        </div>

        <div className="linha-vertical"></div>

        <div className="texto-direita">
          <p className="frase">
            Doe seu lixo eletrônico<br />e cuide do planeta!
          </p>
          <img src={planeta} alt="planeta" className="img-planeta" />
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
