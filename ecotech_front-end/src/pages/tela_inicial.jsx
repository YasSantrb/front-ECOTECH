import React from "react";
import { Link } from "react-router-dom";
import '../styles/tela_inicial.css';

function TelaInicial() {
  return (
    <div class="tela_inicial">
      <h1>Bem-vindo à página inicial!</h1>
      <p>Essa é a primeira página do nosso projeto.</p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/cadastro">Cadastro</Link>
    </div>
  );
}

export default TelaInicial;
