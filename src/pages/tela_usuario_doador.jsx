import "../styles/tela_usuario_doador.css";
import perfil from "../assets/imagens/220_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg";
import chat from "../assets/imagens/icon_chat.png";
import sair from "../assets/imagens/icon_sair.png";
import doacao from "../assets/imagens/order 2.png";
import premio from "../assets/imagens/hand-gesture 2.png";
import fundo from "../assets/imagens/fundo_login_cadastro.jpg";
import lapis from "../assets/imagens/icon_editar.png";
import email from "../assets/imagens/icon-email.png";
import lugar from "../assets/imagens/icon_localizacao_empresa.png";
import data from "../assets/imagens/icon_calendario.png";
import tipo from "../assets/imagens/icon_usuario.png";
import icon_voltar from "../assets/imagens/icon_voltar.png";

function TelaUsuarioDoador() {
  return (
    <>
      <div className="tela_usuario_doador">
        <title>Tela de Usuário</title>
        <img className="background_tela" src={fundo} />
        <div className="top-bar">
          <a href="/usuario/empresa" className="voltar">
            <img src={icon_voltar} alt="voltar" className="icone-voltar" />
            VOLTAR
          </a>
        </div>
        <div className="conteiner-doador">
          <div id="top-botoes">
            <button>
              <img src={chat} />
            </button>
            <button>
              <img src={sair} />
            </button>
          </div>
          <div id="superior">
            <div id="perfil">
              <img id="imagem" src={perfil} />
              <button>
                <p>Editar Perfil</p>
                <img src={lapis} alt="editar" />
              </button>
            </div>

            <div id="info">
              <p>
                <img src={email} /> <strong>Email:</strong>{" "}
                <span>ana@gmail.com</span>
              </p>
              <p>
                <img src={lugar} />
                <strong>Localização:</strong>{" "}
                <span>Floriano - Pi - Brasil</span>
              </p>
              <p>
                <img src={data} />
                <strong>Data de cadastro:</strong>
                <span> 20/05/2022</span>
              </p>
              <p>
                <img src={tipo} />
                <strong>Tipo de usuário:</strong>
                <span> Doador</span>
              </p>
            </div>
          </div>
          <div id="botoes">
            <button>
              <img src={doacao} />
              <p>Minhas Doaçoes</p>
            </button>
            <button>
              <img src={premio} />
              <p>Loja de Pontos</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TelaUsuarioDoador;
