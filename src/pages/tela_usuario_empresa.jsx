import styles from "../styles/tela_usuario_empresa.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_amazon from "../assets/imagens/logo_amazon.png";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import PopUpSucesso from "../components/popUpSucesso";
import { useState } from "react";
import { Link } from "react-router-dom";

function TelaUsuarioEmpresa() {
  const [usuario, setUsuario] = useState(
  );

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

  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  function editarPerfil(evento) {
    evento.preventDefault();

    const perfilAtualizado = {
      ...usuario,
      nome_usuario: nome,
      telefone,
      localizacao,
    };

    setUsuario(perfilAtualizado);
    setMensagemSucesso("Informações salvas com sucesso!!");

    setTimeout(() => {
      setMensagemSucesso(null);
      setIsEditarModalOpen(false);
    }, 2000);
  }

  function capitalizarPrimeiraLetra(texto) {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }


  const nome_usuario = capitalizarPrimeiraLetra(localStorage.getItem("username"));
  const email = localStorage.getItem("email");
  const telefone_usuario = localStorage.getItem("telefone");
  const localizacao_usuario = localStorage.getItem("cep");

  return (
    <div className={styles.tela_usuario_empresa}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
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
        <div className={styles.secao_perfil}>
          <div className={styles.perfil_esquerda}>
            <img src={icon_amazon} alt="" className={styles.perfil} />
            <div className={styles.info_usuario}>
              <h1 className={styles.nome_usuario}>{nome_usuario}</h1>
              <Link to="/usuario/empresa" className={styles.tipo_usuario}>
                <span className={styles.tipo_usuario}>Empresa</span>
              </Link>
            </div>
          </div>

          <button onClick={abrirModalEditar} className={styles.editar_perfil}>
            <i className={`${styles.pincel} fa-solid fa-pencil`}></i>
            Editar perfil
          </button>
        </div>

        <div className={styles.secao_informacoes}>
          <h2 className={styles.titulo_secao}>Informações pessoais</h2>
          <div className={styles.info_grid}>
            <div className={styles.info_item}>
              <i className={`${styles.info_icon} fa-solid fa-envelope`}></i>
              <div className={styles.info_content}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infovalores}>{email}</span>
              </div>
            </div>
            <div className={styles.info_item}>
              <i className={`${styles.info_icon} fa-solid fa-location-dot`}></i>
              <div className={styles.info_content}>
                <span className={styles.infoLabel}>Localização</span>
                <span className={styles.infovalores}>
                  {localizacao_usuario}
                </span>
              </div>
            </div>
            <div className={styles.info_item}>
              <i className={`${styles.info_icon} fa-solid fa-phone`}></i>
              <div className={styles.info_content}>
                <span className={styles.infoLabel}>Telefone</span>
                <span className={styles.infovalores}>{telefone_usuario}</span>
              </div>
            </div>
            <div className={styles.info_item}>
              <i
                className={`${styles.info_icon} fa-solid fa-calendar-days`}
              ></i>
              <div className={styles.info_content}>
                <span className={styles.infoLabel}>Data de entrada</span>
                <span className={styles.infovalores}>04/12/2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secao_informacoes}>
          <h2 className={styles.titulo_secao}>Minhas estatísticas</h2>
          <div className={styles.metricas_usuario}>
            <div className={styles.metricas_box}>
              <i class="fa-solid fa-recycle"></i>
              <div>
                <p className={styles.metricas_titulo}>Coletas realizadas</p>
                <p className={styles.metricas_valor}>12</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditarModalOpen && (
        <div className={styles.popUp_overlay}>
          <div className={styles.popUp}>
            <div className={styles.popUp_inicio}>
              <h3 className={styles.titulo_popUp}>Editar informações</h3>
              <button
                className={styles.popUpBotaoFechar}
                onClick={fecharModalEditar}
              >
                &times;
              </button>
            </div>
            <div className={styles.popUp_conteudo}>
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
                    placeholder="Insira o novo telefone!"
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
                    placeholder="Insira o novo endereco"
                    onChange={(e) => setLocalizacao(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.popUp_botoes}>
                <button
                  className={styles.botao_cancelar_agendamento}
                  onClick={fecharModalEditar}
                >
                  Cancelar
                </button>
                <button
                  className={styles.botao_confirmar_agendamento}
                  onClick={editarPerfil}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TelaUsuarioEmpresa;
