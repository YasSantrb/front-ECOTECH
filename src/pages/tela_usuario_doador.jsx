import styles from "../styles/tela_usuario_doador.module.css";
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
import { Link } from "react-router-dom";

function TelaUsuarioDoador() {
  return (
    <>
      <div className={styles.tela_usuario_doador}>
        <title>Tela de Usuário</title>
        <img className={styles.background_tela} src={fundo} />
        <div className={styles.top_bar}>
          <a href="/usuario/empresa" className={styles.voltar}>
            <img
              src={icon_voltar}
              alt="voltar"
              className={styles.icone_voltar}
            />
            VOLTAR
          </a>
        </div>
        <div className={styles.conteiner_doador}>
          <div className={styles.top_botoes}>
            <button>
              <img src={chat} className={styles.icon_top} />
            </button>
            <button>
              <img src={sair} className={styles.icon_top}/>
            </button>
          </div>
          <div className={styles.superior}>
            <div className={styles.perfil}>
              <img className={styles.imagem} src={perfil} />
              <button>
                <p>Editar Perfil</p>
                <img src={lapis} alt="editar" />
              </button>
            </div>

            <div className={styles.info}>
              <h2 className={styles.nome_usuario}>Ana Clara</h2>
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
          <div className={styles.botoes}>
            <Link className={styles.link_historico} to="/historico/doacoes">
              <button>
                <img src={doacao} />
                <p className={styles.link_p}>Minhas Doaçoes</p>
              </button>
            </Link>
            <Link className={styles.link_historico} to="/sistema/pontos">
            <button>
              <img src={premio} />
              <p>Loja de Pontos</p>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TelaUsuarioDoador;
