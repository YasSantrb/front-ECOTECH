import "../styles/tela_usuario_empresa.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import logo_amazon from "../assets/imagens/logo_amazon.png";
import icon_email from "../assets/imagens/icon_email_empresa.png";
import icon_telefone from "../assets/imagens/icon_telefone.png";
import icon_localizacao_empresa from "../assets/imagens/icon_localizacao_empresa.png";
import icon_calendario from "../assets/imagens/icon_calendario.png";
import icon_usuario from "../assets/imagens/icon_usuario.png";
import icon_editar from "../assets/imagens/icon_editar.png";
import icon_localizacao from "../assets/imagens/icon_localizacao.png";
import icon_chat from "../assets/imagens/icon_chat.png";
import icon_sair from "../assets/imagens/icon_sair.png";
import icon_voltar from "../assets/imagens/icon_voltar.png";

function TelaUsuarioEmpresa() {
  return (
    <div className="tela_usuario_empresa">
      <img src={fundo_login_cadastro} alt="imagem_de_fundo" className="background_tela_empresa" />

      <div className="top-bar">
        <a href="/" className="voltar">
          <img src={icon_voltar} alt="voltar" className="icone-voltar" />
          VOLTAR
        </a>
      </div>

      <div className="perfil-box">
        <div className="icons-top">
          <img src={icon_chat} alt="chat" className="icon-top" />
          <img src={icon_sair} alt="sair" className="icon-top" />
        </div>

        <div className="perfil-esquerda">
          <img src={logo_amazon} alt="foto_amazon" className="foto-perfil" />
          <button className="editar-perfil">
            Editar perfil
            <img src={icon_editar} alt="icone editar" className="icone-botao" />
          </button>
        </div>

        <div className="perfil-direita">
          <h2 className="nome-usuario">Amazon</h2>
          <p><img src={icon_email} alt="email" className="icone-texto" /><strong>Email:</strong> <span>amazon@gmail.com</span></p>
          <p><img src={icon_telefone} alt="telefone" className="icone-texto" /><strong>Telefone para contato:</strong> <span>(89) 99999-9999</span></p>
          <p><img src={icon_localizacao_empresa} alt="localizacao" className="icone-texto" /><strong>Localização:</strong> <span>São Paulo – SP – Brasil</span></p>
          <p><img src={icon_calendario} alt="data cadastro" className="icone-texto" /><strong>Data de cadastro:</strong> <span>06/12/2020</span></p>
          <p><img src={icon_usuario} alt="tipo usuario" className="icone-texto" /><strong>Tipo de usuário:</strong> <span>Empresa</span></p>

          <button className="botao-pontos">
            <img src={icon_localizacao} alt="icon_localizacao" className="icon_localizacao" />
            <span>Pontos de coletas</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TelaUsuarioEmpresa;
