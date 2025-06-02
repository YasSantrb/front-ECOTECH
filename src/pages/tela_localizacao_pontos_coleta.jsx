import styles from "../styles/tela_localizacao_pontos_coleta.module.css";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import Logo from "../assets/imagens/Logo.png";
import Mapa from "../components/mapa";
import { useState } from "react";
import { Link } from "react-router-dom";
import pontoColeta1 from "../assets/imagens/Captura de tela 2025-06-01 123728.png";
import pontoColeta2 from "../assets/imagens/Captura de tela 2025-06-01 162023.png";
import pontoColeta3 from "../assets/imagens/Captura de tela 2025-06-01 165026.png";
import pontoColeta4 from "../assets/imagens/Captura de tela 2025-06-01 165039.png";
import pontoColeta5 from "../assets/imagens/Captura de tela 2025-06-01 165056.png";
import Reciclagem from "../assets/imagens/Reciclagem.jpeg";
import EcoPonto from "../assets/imagens/EcoPonto.jpg";
import ImagemPontoColeta1 from "../assets/imagens/ImagemPontoColeta.jpeg";
import ImagemPontoColeta2 from "../assets/imagens/ImagemPontoDeColeta2.jpg";
import ImagemPontoColeta3 from "../assets/imagens/ImagemPontoDeColeta3.webp";

function TelaLocalizacaoPontosColeta() {
  const [pontoSelecionado, setPontoSelecionado] = useState(null);
  const [pesquisa, setPesquisa] = useState("");

  const pontosDeColeta = [
    {
      id: 1,
      imagemPopUp: Reciclagem,
      imagemMapa: pontoColeta1,
      nome: "EcoLixo",
      cidade: "Floriano - PI",
      rua: "Avenida João Luís Ferreira",
      bairro: "Centro",
      numero: 677,
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
      telefone: "(89)9916-1616",
      latitude: -6.76698,
      longitude: -43.02278,
    },
    {
      id: 2,
      imagemPopUp: ImagemPontoColeta1,
      imagemMapa: pontoColeta2,
      nome: "TecnoVerde",
      cidade: "Floriano - PI",
      rua: "Rua Francisco Urquíza",
      bairro: "Campo Velho",
      numero: 11,
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
      telefone: "(89)9915-1515",
      latitude: -6.787,
      longitude: -43.045,
    },
    {
      id: 3,
      imagemMapa: pontoColeta3,
      imagemPopUp: EcoPonto,
      nome: "EcoPonto",
      cidade: "Barão de Grajaú - MA",
      rua: "Rua Tonico Soares",
      bairro: "Centro",
      numero: 1025,
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
      telefone: "(89)9914-1414",
      latitude: -6.75,
      longitude: -43.02278,
    },
    {
      id: 4,
      imagemPopUp: ImagemPontoColeta2,
      imagemMapa: pontoColeta4,
      nome: "ReCiclaHub",
      cidade: "Teresina - PI",
      rua: "Avenida Pedro Freitas",
      bairro: "Vermelha",
      numero: 49,
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
      telefone: "(86)9913-1313",
      latitude: -5.106675,
      longitude: -42.811747,
    },
    {
      id: 5,
      imagemPopUp: ImagemPontoColeta3,
      imagemMapa: pontoColeta5,
      nome: "GreenDrop",
      cidade: "Teresina - PI",
      rua: "Avenida Mirtes Melão",
      bairro: "Parque Eldorado",
      numero: 520,
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
      telefone: "(86)9912-1212",
      latitude: -5.08419,
      longitude: -42.747706,
    },
  ];

  const pesquisarPonto = pontosDeColeta.filter((ponto) => {
    const filtrarNome = ponto.nome
      ?.toLocaleLowerCase()
      .includes(pesquisa.toLowerCase());
    const filtrarNomeRua = ponto.rua
      ?.toLowerCase()
      .includes(pesquisa.toLowerCase());
    return filtrarNome || filtrarNomeRua;
  });

  const [isPopUpInformacaoOpen, setPopUpInformacaoOpen] = useState(false);

  function abrirPopUpInformacao(ponto) {
    setPontoSelecionado(ponto);
    setPopUpInformacaoOpen(true);
  }

  function fecharPopUpInformacao() {
    setPontoSelecionado(null);
    setPopUpInformacaoOpen(false);
  }

  return (
    <>
      <div className={styles.tela_localizacao_pontos}>
        <main>
          <div className={styles.main}>
            <div className={styles.localizar_pontos}>
              <nav className={styles.nav_localizacao_pontos}>
                <Link className={styles.link_voltar} to="/">
                  <img
                    className={styles.icon_voltar}
                    src={icon_voltar}
                    alt=""
                  />
                  <p className={styles.nav_p}>VOLTAR</p>
                </Link>
              </nav>
              <div className={styles.info_localizacao}>
                <div className={styles.logo_div}>
                  <img
                    className={styles.logo_ecotech_localizacao}
                    src={Logo}
                    alt=""
                  />
                </div>
                <div className={styles.filtros}>
                  <div className={styles.pesquisar_local}>
                    <i
                      className={`${styles.icone_pesquisar} fa-solid fa-magnifying-glass`}
                    ></i>
                    <input
                      className={styles.filtro_input}
                      type="text"
                      value={pesquisa}
                      onChange={(e) => setPesquisa(e.target.value)}
                      placeholder="Digite o endereço"
                    />
                  </div>
                </div>

                <div className={styles.lista_pontos_coleta}>
                  {pesquisarPonto.map((ponto) => (
                    <div
                      key={ponto.id}
                      className={`${styles.ponto} ${
                        pontoSelecionado?.id === ponto.id ? styles.selecionado : ""
                      }`}
                      onClick={() => abrirPopUpInformacao(ponto)}
                    >
                      <img src={ponto.imagemMapa} alt="" />
                      <div className={styles.pontos_info}>
                        <h3 className={styles.nome_ponto_coleta}>
                          {ponto.nome}
                        </h3>
                        <p className={styles.nome_rua}>
                          <i className="fa-solid fa-location-dot"></i>{" "}
                          {ponto.rua}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.divisao}></div>

            <div className={styles.mapa_localizacao}>
              <div className={styles.popUpDiv}>
                {isPopUpInformacaoOpen && pontoSelecionado && (
                  <div className={styles.popUp}>
                    <img
                      src={pontoSelecionado.imagemPopUp}
                      className={styles.imgPopUp}
                      alt=""
                    />
                    <i
                      className={`${styles.botaoFechar} fa-duotone fa-solid fa-circle-xmark`}
                      onClick={fecharPopUpInformacao}
                    ></i>
                    <div className={styles.popUpmain}>
                      <div className={styles.infoPopUp}>
                        <h3>{pontoSelecionado.nome}</h3>
                        <div className={styles.infoItem}>
                          <i
                            className={`${styles.icone_localizacao} fa-solid fa-location-dot`}
                          ></i>
                          <div className={styles.popUp_span}>
                            <span
                              className={`${styles.popUpInfo} ${styles.ajusteSpanC}`}
                            >
                              Cidade:
                            </span>
                            {pontoSelecionado.cidade}
                          </div>
                        </div>
                        <div className={styles.infoItem}>
                          <i
                            className={`${styles.popUpIRua} fa-solid fa-road`}
                          ></i>
                          <div className={styles.popUp_span}>
                            <span
                              className={`${styles.popUpInfo} ${styles.ajusteSpanR}`}
                            >
                              Rua:
                            </span>
                            {pontoSelecionado.rua}
                          </div>
                        </div>
                        <div className={styles.infoItem}>
                          <i
                            className={`${styles.icone_localizacao} fa-solid fa-map-pin`}
                          ></i>
                          <div className={styles.popUp_span}>
                            <span
                              className={`${styles.popUpInfo} ${styles.ajusteSpanB}`}
                            >
                              Bairro:
                            </span>
                            {pontoSelecionado.bairro}
                          </div>
                        </div>
                        <div className={styles.infoItem}>
                          <i className="fa-solid fa-hashtag"></i>
                          <div className={styles.popUp_span}>
                            <span
                              className={`${styles.popUpInfo} ${styles.ajusteSpanN}`}
                            >
                              Número:
                            </span>
                            {pontoSelecionado.numero}
                          </div>
                        </div>
                        <div className={styles.infoItem}>
                          <i className="fa-solid fa-clock"></i>
                          <div className={styles.popUp_span}>
                            <span
                              className={`${styles.popUpInfo} ${styles.ajusteSpan}`}
                            >
                              Horário:
                            </span>
                            {pontoSelecionado.horarioFuncionamento}
                          </div>
                        </div>
                        <div className={styles.infoItem}>
                          <i className="fa-solid fa-phone"></i>
                          <div className={styles.popUp_span}>
                            <span
                              className={`${styles.popUpInfo} ${styles.ajusteSpan}`}
                            >
                              Telefone:
                            </span>
                            {pontoSelecionado.telefone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Mapa
                latitude={pontoSelecionado?.latitude || null}
                longitude={pontoSelecionado?.longitude || null}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default TelaLocalizacaoPontosColeta;
