import styles from "../styles/tela_usuario_empresa.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_amazon from "../assets/imagens/logo_amazon.png";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function TelaUsuarioEmpresa() {
  const [usuario, setUsuario] = useState({
    nome_usuario: "Amazon",
    email: "amazon@gmail.com",
    telefone: "(89)3521-7373",
    localizacao: "Teresina - PI - Brasil",
  });

  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  function abrirModalEditar() {
    setNome(usuario.nome_usuario);
    setTelefone(usuario.telefone);
    setLocalizacao(usuario.localizacao);
    setIsEditarModalOpen(true);
  }

  function fecharModalEditar() {
    setIsEditarModalOpen(false);
  }

  function editarPerfil(evento) {
    evento.preventDefault();

    const perfilAtualizado = {
      ...usuario,
      nome_usuario: nome,
      telefone,
      localizacao,
    };

    setUsuario(perfilAtualizado);
    fecharModalEditar();
  }

  return (
    <div className={styles.tela_usuario_empresa}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela_empresa}
      />

      <div className={styles.top_bar_empresa}>
        <Link className={styles.link_voltar} to="/">
          <img className={styles.icon_voltar} src={icon_voltar} alt="" />
          <p className={styles.nav_p}>VOLTAR</p>
        </Link>
      </div>

      <div className={styles.perfil_box}>
        {/* <div className={styles.icones_topo}>
          <button className={styles.icone_botao}>
            <img src={icon_chat} alt="" />
          </button>
          <button className={styles.icone_botao}>
            <img src={icon_sair} alt="" />
          </button>
        </div> */}

        <div className={styles.secao_perfil}>
          <div className={styles.perfil_esquerda}>
            <img src={icon_amazon} alt="" className={styles.perfil} />
            <div className={styles.info_usuario}>
              <h1 className={styles.nome_usuario}>{usuario.nome_usuario}</h1>
              <Link to="/usuario/doador" className={styles.tipo_usuario}>
                <span className={styles.tipo_usuario}>Empresa</span>
              </Link>
            </div>

            {/* <div className={styles.info_pontos}>
              <div className={styles.pontos}>
                <span className={styles.numero_pontos}>99.99</span>
                <span className={styles.label}>Pontos</span>
              </div>
              <div className={styles.pontos}>
                <span className={styles.numero_pontos}>15</span>
                <span className={styles.label}>Doações</span>
              </div>
            </div> */}
          </div>

          <button onClick={abrirModalEditar} className={styles.editar_perfil}>
            <i className={`${styles.pincel} fa-solid fa-pencil`}></i>
            Editar perfil
          </button>

          {isEditarModalOpen && (
            <div className={styles.popUpFormulario}>
              <div className={styles.popUp}>
                <form className={styles.formulario} onSubmit={editarPerfil}>
                  <div className={styles.icone_sair_modal}>
                    <i
                      className={`${styles.botao_sair_modal} fa-solid fa-x`}
                      onClick={fecharModalEditar}
                    ></i>
                  </div>
                  <div className={styles.titulo}>
                    <h3 className={styles.h3}>Editar perfil</h3>
                  </div>
                  <div className={styles.inputs}>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>Nome</label>
                      <input
                        className={styles.input}
                        type="text"
                        value={nome}
                        placeholder="Insira o novo nome"
                        onChange={(e) => setNome(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>Telefone</label>
                      <input
                        className={styles.input}
                        type="text"
                        value={telefone}
                        placeholder="Insira o novo telefone"
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>Localização</label>
                      <input
                        className={styles.input}
                        type="text"
                        value={localizacao}
                        placeholder="Insira a nova localização"
                        onChange={(e) => setLocalizacao(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.botao_formulario_div}>
                    <button className={styles.botao_formulario} type="submit">
                      Salvar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className={styles.secao_informacoes}>
          <h2 className={styles.titulo_secao}>Informações pessoais</h2>
          <div className={styles.info_grid}>
            <div className={styles.info_item}>
              <i className={`${styles.info_icon} fa-solid fa-envelope`}></i>
              <div className={styles.info_content}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infovalores}>{usuario.email}</span>
              </div>
            </div>
            <div className={styles.info_item}>
              <i className={`${styles.info_icon} fa-solid fa-location-dot`}></i>
              <div className={styles.info_content}>
                <span className={styles.infoLabel}>Localização</span>
                <span className={styles.infovalores}>
                  {usuario.localizacao}
                </span>
              </div>
            </div>
            <div className={styles.info_item}>
              <i className={`${styles.info_icon} fa-solid fa-phone`}></i>
              <div className={styles.info_content}>
                <span className={styles.infoLabel}>Telefone</span>
                <span className={styles.infovalores}>{usuario.telefone}</span>
              </div>
            </div>
            <div className={styles.info_item}>
              <i
                className={`${styles.info_icon} fa-solid fa-calendar-days`}
              ></i>
              <div className={styles.info_content}>
                <span className={styles.infoLabel}>Data de entrada</span>
                <span className={styles.infovalores}>19/05/2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secao_informacoes}>
          <h2 className={styles.titulo_secao}>Acesso rápido</h2>
          <div className={styles.botoes_rapidos}>
            <Link to="/registro/pontos/coleta" className={styles.botao_sair}>
              Registrar pontos coleta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaUsuarioEmpresa;
