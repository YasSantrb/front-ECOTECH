import styles from "../styles/tela_feed.module.css";
import { useState } from "react";
import icone_sucesso from "../assets/imagens/checked 2.png";
import { Link, useNavigate } from "react-router-dom";

function BarraNavegacaoEmpresa() {
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
  localStorage.setItem("tipoUsuario", "empresa");

  const sairPlataforma = () => {
    localStorage.removeItem("logado");
    localStorage.removeItem("tipoUsuario");
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
                        <Link to="/login" className={`${styles.link_dropdown} ${styles.entrar}`}>
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
                            to="historico/doacoes"
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
                            to="/registro/pontos/coleta"
                            className={`${styles.link_dropdown} ${styles.registro_pontos}`}
                          >
                            Meus pontos
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
                          <div className={styles.popUpSair}>
                            <div className={styles.popUp}>
                              <i
                                className={`${styles.botao_sair} fa-solid fa-x`}
                                onClick={fecharModal}
                              ></i>
                              <p className={styles.popUp_p}>
                                Tem certeza de que deseja sair do site?
                              </p>
                              <div className={styles.botaoPopUp}>
                                <button
                                  onClick={fecharModal}
                                  className={styles.botoes}
                                >
                                  Cancelar
                                  <i
                                    className={`${styles.icone_cancelar} fa-solid fa-circle-xmark`}
                                  ></i>
                                </button>
                                <button
                                  className={styles.botoes}
                                  onClick={sairPlataforma}
                                >
                                  Confirmo!
                                  <img
                                    className={styles.icone_sucesso}
                                    src={icone_sucesso}
                                    alt=""
                                  />
                                </button>
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
