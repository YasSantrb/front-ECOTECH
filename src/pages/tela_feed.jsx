import { Link } from "react-router-dom";
import styles from "../styles/tela_feed.module.css";
import { useEffect, useRef, useState } from "react";
import feed2 from "../assets/imagens/2.png";
import feed3 from "../assets/imagens/3.png";
import feed4 from "../assets/imagens/4.png";
import feed5 from "../assets/imagens/1.png";
import BarraNavegacaoDoador from "../components/navBarDoador";
import BarraNavegacaoEmpresa from "../components/navBarEmpresa";

function TelaFeed() {
  // Função para o carrossel automatico
  const slideReferencia = useRef(null);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const intervalo = setTimeout(() => {
      setIndiceAtual((valorAtual) =>
        valorAtual === totalSlides - 1 ? 0 : valorAtual + 1
      );
    }, 5000);
    return () => clearTimeout(intervalo);
  }, [indiceAtual]);
  const botoesRef = useRef([]);

  useEffect(() => {
    if (slideReferencia.current) {
      slideReferencia.current.style.transform = `translateX(-${
        indiceAtual * 100
      }%)`;
    }
    botoesRef.current.forEach((botao, index) => {
      if (botao) {
        botao.classList.toggle(styles.ativo, index === indiceAtual);
      }
    });
  }, [indiceAtual]);

  function mudarSlide(indiceSlideEscolhido) {
    setIndiceAtual(indiceSlideEscolhido);
  }

  //Fim da função para o carrossel automatco

  //Inicio da função para o carrossel manual
  const [indiceAtualFeed, setIndiceAtualFeed] = useState(0);
  const larguraImagem = 400;

  const moverCarrossel = (direcao) => {
    setIndiceAtualFeed((indiceAtualCarrossel) => {
      let novoIndice = indiceAtualCarrossel + direcao;

      if (novoIndice < 0) novoIndice = 0;

      const maxIndice = 5 - Math.floor(window.innerWidth / larguraImagem);
      if (novoIndice > maxIndice) novoIndice = maxIndice;

      return novoIndice;
    });
  };

  const estiloDeslizamento = {
    transform: `translateX(-${indiceAtualFeed * larguraImagem}px)`,
  };
  //Fim da função para o carrossel manual

  //Inicio da função de listagem
  const [filtros, setFiltros] = useState({
    categoria: "todos",
    local: "todos",
    estado: "todos",
  });

  const mudarFiltro = (escolha) => {
    const { id, value } = escolha.target;
    const filtroNome = id.replace("filtro_", "");

    setFiltros((estadoAnterior) => ({
      ...estadoAnterior,
      [filtroNome]: value,
    }));
  };

  const removerFiltro = (tipo) => {
    setFiltros((tipoEscolhido) => ({
      ...tipoEscolhido,
      [tipo]: "todos",
    }));
  };

  const filtrosAtivos = (tipo) => {
    const opcoes = {
      categoria: {
        eletronicos: "Eletrônicos",
        computadores: "Computadores",
        tablets: "Tablets",
      },
      local: {
        floriano: "Floriano - PI",
        teresina: "Teresina - PI",
      },
      estado: {
        novo: "Novo",
        usado: "Usado",
        pecas: "Para peças",
      },
    };

    const valor = filtros[tipo];

    if (valor !== "todos") {
      return (
        <div className={styles.filtro_chip} key={tipo}>
          <span className={styles.filtro_span}>{opcoes[tipo][valor]}</span>
          <button
            className={styles.filtro_button}
            onClick={() => removerFiltro(tipo)}
          >
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      );
    }

    return null;
  };
  //Fim da função de listagem

  const doacoesDoFeedCarrossel = [
    {
      id: "1",
      imagem: "src/assets/imagens/download 1 (1).png",
      tipo: "Eletrônico",
      titulo: "Televisão de tubo",
      descricao: "Pode ser reutilizado ou ter partes aproveitadas.",
      local: "Floriano – PI",
      condicao: "Usado",
    },
    {
      id: "2",
      imagem: "src/assets/imagens/download 3.png",
      tipo: "Eletrônico",
      titulo: "Placa-mãe ASUS",
      descricao: "Ideal para reaproveitamento de peças.",
      local: "Teresina – PI",
      condicao: "Para peças",
    },
    {
      id: "3",
      imagem: "src/assets/imagens/OIP 8.png",
      tipo: "Tablet",
      titulo: "Tablet Samsung",
      descricao: "Produto novo, porém com defeito que impede o uso imediato.",
      local: "Floriano – PI",
      condicao: "Novo",
    },
    {
      id: "4",
      imagem: "src/assets/imagens/OIP 12.png",
      tipo: "Computador",
      titulo: "Computador antigo",
      descricao: "Pode ser reutilizado ou ter partes aproveitadas.",
      local: "Teresina – PI",
      condicao: "Usado",
    },
    {
      id: "5",
      imagem: "src/assets/imagens/download 1 (1).png",
      tipo: "Eletrônico",
      titulo: "Televisão de tubo",
      descricao: "Pode ser reutilizado ou ter partes aproveitadas.",
      local: "Floriano – PI",
      condicao: "Usado",
    },
    {
      id: "6",
      imagem: "src/assets/imagens/OIP 8.png",
      tipo: "Tablet",
      titulo: "Tablet Samsung",
      descricao: "Produto novo, porém com defeito que impede o uso imediato.",
      local: "Floriano – PI",
      condicao: "Novo",
    },
  ];

  const doacoesDoFeed = [
    {
      id: "1",
      imagem: "src/assets/imagens/download 1 (1).png",
      tipo: "Eletrônico",
      titulo: "Televisão de tubo",
      descricao: "Pode ser reutilizado ou ter partes aproveitadas.",
      local: "Floriano – PI",
      condicao: "Usado",
    },
    {
      id: "2",
      imagem: "src/assets/imagens/download 3.png",
      tipo: "Eletrônico",
      titulo: "Placa-mãe ASUS",
      descricao: "Ideal para reaproveitamento de peças.",
      local: "Teresina – PI",
      condicao: "Para peças",
    },
    {
      id: "3",
      imagem: "src/assets/imagens/OIP 8.png",
      tipo: "Tablet",
      titulo: "Tablet Samsung",
      descricao: "Produto novo, porém com defeito que impede o uso imediato.",
      local: "Floriano – PI",
      condicao: "Novo",
    },
    {
      id: "4",
      imagem: "src/assets/imagens/OIP 12.png",
      tipo: "Computador",
      titulo: "Computador antigo",
      descricao: "Pode ser reutilizado ou ter partes aproveitadas.",
      local: "Teresina – PI",
      condicao: "Usado",
    },
  ];

  const mapaCategorias = {
    eletronicos: "Eletrônico",
    computadores: "Computador",
    tablets: "Tablet",
  };

  const mapaCondicoes = {
    novo: "Novo",
    usado: "Usado",
    pecas: "Para peças",
  };

  const doacoesFiltradas = doacoesDoFeed.filter((doacao) => {
    const categoria =
      filtros.categoria === "todos" ||
      doacao.tipo === mapaCategorias[filtros.categoria];
    const local =
      filtros.local === "todos" ||
      doacao.local.toLowerCase().includes(filtros.local.toLowerCase());
    const estado =
      filtros.estado === "todos" ||
      doacao.condicao === mapaCondicoes[filtros.estado];

    return categoria && local && estado;
  });

  const tipoUsuario = localStorage.getItem("tipoUsuario"); 
  const logado = localStorage.getItem("logado") === "true";

  return (
    <>
      {logado && tipoUsuario === "doador" && <BarraNavegacaoDoador />}
      {logado && tipoUsuario === "empresa" && <BarraNavegacaoEmpresa />}
      {!logado && <BarraNavegacaoDoador />}

      <main>
        <div className={styles.carrossel_container}>
          <div
            className={styles.carrossel_slide}
            id="carrossel"
            ref={slideReferencia}
          >
            <div className={styles.slide_conteudo1}>
              <div className={styles.carrossel_titulo}>
                <img
                  className={styles.img_sustantavel_carrossel}
                  src="src/assets/imagens/sustainable (1) 2.png"
                  alt="Ícone Sustentável"
                />
                <h1 className={styles.titulo}>
                  Descarte o seu <span className={styles.e_lixo}>e-lixo</span>{" "}
                  de forma consciente!
                </h1>
              </div>
              <p className={styles.carrossel_p}>
                E-lixo refere-se a equipamentos eletrônicos descartados, como
                celulares, computadores e baterias, que contêm substâncias
                prejudiciais ao meio ambiente.
              </p>
            </div>
            <div className={styles.slide_conteudo2}>
              <img src={feed2} alt="" className={styles.img_carrossel} />
            </div>

            <div className={styles.slide_conteudo3}>
              <img src={feed3} alt="" className={styles.img_carrossel} />
            </div>

            <div className={styles.slide_conteudo4}>
              <img src={feed4} alt="" className={styles.img_carrossel} />
            </div>

            <div className={styles.slide_conteudo5}>
              <img src={feed5} alt="" className={styles.img_carrossel} />
            </div>
          </div>
        </div>

        <div className={styles.botoes_navegacao}>
          <button
            ref={(elemento) => (botoesRef.current[0] = elemento)}
            className={styles.botao_carrossel}
            onClick={() => mudarSlide(0)}
          ></button>
          <button
            ref={(elemento) => (botoesRef.current[1] = elemento)}
            className={styles.botao_carrossel}
            onClick={() => mudarSlide(1)}
          ></button>
          <button
            ref={(elemento) => (botoesRef.current[2] = elemento)}
            className={styles.botao_carrossel}
            onClick={() => mudarSlide(2)}
          ></button>
          <button
            ref={(elemento) => (botoesRef.current[3] = elemento)}
            className={styles.botao_carrossel}
            onClick={() => mudarSlide(3)}
          ></button>
          <button
            ref={(elemento) => (botoesRef.current[4] = elemento)}
            className={styles.botao_carrossel}
            onClick={() => mudarSlide(4)}
          ></button>
        </div>

        <section className={styles.carrossel_feed}>
          <h1 className={styles.titulo_feed}>Últimas novidades</h1>

          <button
            className={`${styles.botao_carrossel_feed} ${styles.botao_esquerdo_carrossel}`}
            onClick={() => moverCarrossel(-1)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className={styles.carrossel_container_externa}>
            <div
              className={styles.carrossel_cards_container}
              id="carrossel"
              style={estiloDeslizamento}
            >
              {doacoesDoFeedCarrossel.map((doacao) => (
                <div className={styles.card_feed_carrossel}>
                  <img className={styles.card_img} src={doacao.imagem} alt="" />
                  <p className={styles.tipo_card}>{doacao.tipo}</p>
                  <div className={styles.card}>
                    <div className={styles.card_info}>
                      <h1 className={styles.titulo_card}>{doacao.titulo}</h1>
                      <p className={styles.p_card}>{doacao.descricao}</p>
                      <span className={styles.span_card}>{doacao.local}</span>
                      <div className={styles.card_meta}>
                        <p className={styles.p_card}>
                          <i className="fa-solid fa-gear"></i> {doacao.condicao}
                        </p>
                      </div>
                    </div>
                    <Link
                      className={styles.link_card_feed}
                      to={`/info/doacao/${doacao.id}`}
                    >
                      <button className={styles.botao_card}>Eu quero!</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.botao_carrossel_feed} ${styles.botao_direito_carrossel}`}
            onClick={() => moverCarrossel(1)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </section>

        <section id="doacoes" className={styles.secao_cards}>
          <h1 className={styles.titulo_secao_cards}>Doações</h1>
          <div className={styles.secaofiltros}>
            <div className={styles.resumo_secao}>
              <i className="fa-solid fa-recycle"></i>
              <h2 className={styles.resumo_titulo}>Dê um novo destino</h2>
              <p className={styles.resumo_texto}>
                Cada doação é um passo a mais por um mundo mais justo e
                sustentável.
              </p>
            </div>

            <div className={styles.filtros_container}>
              <div className={styles.filtro_item}>
                <label
                  className={styles.label_filtro}
                  htmlFor="filtro_categoria"
                >
                  Categoria
                </label>
                <select
                  className={styles.filtro_categoria}
                  id="filtro_categoria"
                  value={filtros.categoria}
                  onChange={mudarFiltro}
                >
                  <option value="todos">Todos</option>
                  <option value="eletronicos">Eletrônicos</option>
                  <option value="computadores">Computadores</option>
                  <option value="tablets">Tablets</option>
                </select>

                <div className={styles.filtros_ativos}>
                  {filtrosAtivos("categoria")}
                </div>
              </div>

              <div className={styles.filtro_item}>
                <label className={styles.label_filtro} htmlFor="filtro_local">
                  Localidade
                </label>
                <select
                  className={styles.filtro_categoria}
                  id="filtro_local"
                  value={filtros.local}
                  onChange={mudarFiltro}
                >
                  <option value="todos">Todos</option>
                  <option value="floriano">Floriano - PI</option>
                  <option value="teresina">Teresina - PI</option>
                </select>
                <div className={styles.filtros_ativos}>
                  {filtrosAtivos("local")}
                </div>
              </div>

              <div className={styles.filtro_item}>
                <label className={styles.label_filtro} htmlFor="filtro_estado">
                  Estado
                </label>
                <select
                  className={styles.filtro_categoria}
                  id="filtro_estado"
                  value={filtros.estado}
                  onChange={mudarFiltro}
                >
                  <option value="todos">Todos</option>
                  <option value="novo">Novo</option>
                  <option value="usado">Usado</option>
                  <option value="pecas">Para peças</option>
                </select>

                <div className={styles.filtros_ativos}>
                  {filtrosAtivos("estado")}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cards_secao_cards}>
            {doacoesFiltradas.map((doacao) => (
              <div className={styles.card_feed_carrossel}>
                <img className={styles.card_img} src={doacao.imagem} alt="" />
                <p className={styles.tipo_card}>{doacao.tipo}</p>
                <div className={styles.card}>
                  <div className={styles.card_info}>
                    <h1 className={styles.titulo_card}>{doacao.titulo}</h1>
                    <p className={styles.p_card}>{doacao.descricao}</p>
                    <span className={styles.span_card}>{doacao.local}</span>
                    <div className={styles.card_meta}>
                      <p className={styles.p_card}>
                        <i className="fa-solid fa-gear"></i> {doacao.condicao}
                      </p>
                    </div>
                  </div>
                  <Link
                    className={styles.link_card_feed}
                    to={`/info/doacao/${doacao.id}`}
                  >
                    <button className={styles.botao_card}>Eu quero!</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer_feed}>
        <div className={styles.footer_content}>
          <div className={styles.footer_contacts}>
            <img
              src="src/assets/imagens/sustainable (1) 2.png"
              alt="Ícone Sustentável"
            />
            <p>Juntos por um futuro mais sustentável.</p>
            <div className={styles.footer_social_media}>
              <a
                href="#"
                className={`${styles.footer_link} ${styles.instagram}`}
                id="instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className={`${styles.footer_link} ${styles.facebook}`}
                id="facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className={`${styles.footer_link} ${styles.whatsapp}`}
                id="whatsapp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <ul className={styles.footer_list}>
            <li>
              <h3>Ecotech</h3>
            </li>
            <li>
              <a href="#" className={styles.footer_link}>
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#doacoes" className={styles.footer_link}>
                Doações
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer_link}>
                Pontos de coleta
              </a>
            </li>
          </ul>

          <ul className={styles.footer_list}>
            <li>
              <h3>O que doar?</h3>
            </li>
            <li>Periféricos (teclado, mouse)</li>
            <li>Impressoras</li>
            <li>Eletroportáteis (tipo rádio)</li>
          </ul>

          <div className={styles.footer_subscribe}>
            <h3>Receba novidades</h3>
            <p className={styles.p_subscribe}>
              Informe seu e-mail para receber dicas de descarte,
              sustentabilidade e novidades da plataforma.
            </p>
            <div className={styles.input_group}>
              <input type="email" className={styles.email} />
              <button className={styles.botao_footer_feed}>
                <i class="fa-solid fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.footer_copyright}>
          &copy; 2025 ECOTECH. Todos os direitos reservados. Desenvolvido com
          propósito sustentável.
        </div>
      </footer>
    </>
  );
}

export default TelaFeed;
