import styles from "../styles/tela_feed.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BarraNavegacaoEmpresa({ pesquisa, setPesquisa }) {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function abrirModal() {
    setIsModalOpen(true);
  }

  function fecharModal() {
    setIsModalOpen(false);
  }

  const logado = localStorage.getItem("logado") === "true";

  const sairPlataforma = () => {
    localStorage.removeItem("logado");
    localStorage.removeItem("userType");
    localStorage.removeItem("tipoUsuario");
    localStorage.removeItem("userName");
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    navigate("/inicial");
  };

  return (
    <header>
      <nav className={styles.nav_feed}>
        <div className={styles.nav_feed_info}>
          <Link to="/inicial">
            <img
              className={styles.logo_feed}
              src="src/assets/imagens/Logo.png"
              alt=""
            />
          </Link>

          <div className={styles.pesquisar}>
            <i
              className={`${styles.icone_pesquisar} fa-solid fa-magnifying-glass`}
            ></i>
            <input
              className={styles.campo_pesquisa}
              type="text"
              placeholder="Pesquisar"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />
          </div>

          <div className={styles.lista_feed}>
            <ul className={styles.menu}>
              <li>
                <Link
                  className={`${styles.link_feed} ${styles.link_home} `}
                  to="/sobre/nos"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.link_feed} ${styles.link_pontos_de_coleta}`}
                  to="/localizacao/pontos/coleta"
                >
                  Pontos de Coleta
                </Link>
              </li>
              <li className={` ${styles.dropdown}`}>
                <span
                  onClick={() => setMenuAberto(!menuAberto)}
                  className={`${styles.link_feed} ${styles.link_usuario}`}
                >
                  Usuário
                </span>

                {menuAberto && (
                  <ul className={styles.dropdown_menu}>
                    {!logado ? (
                      <li>
                        <Link
                          to="/login"
                          className={`${styles.link_dropdown} ${styles.entrar}`}
                        >
                          Entrar
                        </Link>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/usuario/empresa"
                            className={`${styles.link_dropdown} ${styles.meu_perfil}`}
                          >
                            Meu perfil
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/historico/agendamentos"
                            className={`${styles.link_dropdown} ${styles.meu_historico}`}
                          >
                            Meu histórico
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/chat"
                            className={`${styles.link_dropdown} ${styles.meu_chat}`}
                          >
                            Meu chat
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/meus/pontos/coleta"
                            className={`${styles.link_dropdown} ${styles.meus_pontos}`}
                          >
                            Meus pontos
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/registro/pontos/coleta"
                            className={`${styles.link_dropdown} ${styles.registro_pontos}`}
                          >
                            Criar pontos
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => abrirModal()}
                            className={`${styles.link_dropdown} ${styles.sair}`}
                          >
                            Sair
                          </Link>
                        </li>

                        {isModalOpen && (
                          <div className={styles.popUpOverlay}>
                            <div className={styles.popUpCard}>
                              <div className={styles.popUpHeader}>
                                <h3 className={styles.popUpTitulo}>
                                  Sair da plataforma
                                </h3>
                                <button
                                  className={styles.popUpBotaoFechar}
                                  onClick={fecharModal}
                                >
                                  &times;
                                </button>
                              </div>
                              <div className={styles.popUpContent}>
                                <h4 className={styles.modal_informacoes_p}>
                                  Tem certeza que deseja sair do ECOTECH?
                                </h4>
                                <div className={styles.popUp_botoes}>
                                  <button
                                    className={
                                      styles.botao_cancelar_agendamento
                                    }
                                    onClick={fecharModal}
                                  >
                                    Cancelar
                                  </button>
                                  <button
                                    className={
                                      styles.botao_confirmar_agendamento
                                    }
                                    onClick={sairPlataforma}
                                  >
                                    Confirmar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default BarraNavegacaoEmpresa;
