import styles from "../styles/tela_usuario_empresa.module.css";
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
import { Link } from "react-router-dom";

function TelaUsuarioEmpresa() {
  return (
    <div className={styles.tela_usuario_empresa}>
      <img src={fundo_login_cadastro} alt="imagem_de_fundo" className={styles.background_tela_empresa} />

      <div className={styles.top_bar_empresa}>
        <a href="/" className={styles.voltar}>
          <img src={icon_voltar} alt="voltar" className={styles.icone_voltar} />
          VOLTAR
        </a>
      </div>

      <div className={styles.perfil_box}>
        <div className={styles.icons_top}>
          <Link className={styles.link_usuario_doador} to="/usuario/doador">Usuário - Doador</Link>
          <Link to="/chat"><img src={icon_chat} alt="chat" className={styles.icon_top} /></Link>
          <img src={icon_sair} alt="sair" className={styles.icon_top} />
        </div>

        <div className={styles.perfil_esquerda}>
          <img src={logo_amazon} alt="foto_amazon" className={styles.foto_perfil} />
          <button className={styles.editar_perfil}>
            Editar perfil
            <img src={icon_editar} alt="icone editar" className={styles.icone_botao} />
          </button>
        </div>

        <div className={styles.perfil_direita}>
          <h2 className={styles.nome_usuario}>Amazon</h2>
          <p><img src={icon_email} alt="email" className={styles.icone_texto} /><strong>Email:</strong> <span>amazon@gmail.com</span></p>
          <p><img src={icon_telefone} alt="telefone" className={styles.icone_texto} /><strong>Telefone para contato:</strong> <span>(89) 99999-9999</span></p>
          <p><img src={icon_localizacao_empresa} alt="localizacao" className={styles.icone_texto} /><strong>Localização:</strong> <span>São Paulo – SP – Brasil</span></p>
          <p><img src={icon_calendario} alt="data cadastro" className={styles.icone_texto} /><strong>Data de cadastro:</strong> <span>06/12/2020</span></p>
          <p><img src={icon_usuario} alt="tipo usuario" className={styles.icone_texto} /><strong>Tipo de usuário:</strong> <span>Empresa</span></p>

          
          <button className={styles.botao_pontos}>
            <Link className={styles.botao_ponto_coleta} to="/localizacao/pontos/coleta">
            <img src={icon_localizacao} alt="icon_localizacao" className={styles.icon_localizacao} />
            <span>Pontos de coletas</span>
            </Link>
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default TelaUsuarioEmpresa;
