import { Link } from "react-router-dom";
import "../styles/tela_inicial.css";

function TelaInicial() {
  return (
    <div className="tela_inicial">
      <img
        src="src/assets/imagens/Tela inicial (2).png"
        alt="imagem_de_fundo"
        className="background_tela_inicial"
      />

      <nav>
        <div className="menu">
          <img src="src/assets/imagens/Logo.png" alt="logo_ecotech" />
          <ul className="lista_inicial">
            <li>
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="link" to="/cadastro">
                Criar conta
              </Link>
            </li>
            <li>
              <Link className="link" to="">Sobre nós</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="conteudo_inicial">
          <div className="conteudos_textuais">
            <h1 className="titulo_inicial">Plataforma de doações</h1>
            <p className="descricao_inicial">
              Dê um destino correto aos seus eletrônicos e contribua para um
              futuro mais <span className="descricao_verde"> verde!</span>
            </p>
          </div>

          <div className="botao">
            <Link to="/">
            <button className="botao_inicial"> Faça sua doação!</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TelaInicial;
