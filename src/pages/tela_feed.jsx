import { Link } from "react-router-dom";
import "../styles/tela_feed.css";
import { useEffect, useRef, useState } from "react";

function TelaFeed() {
  // Função para o carrossel automatico
  const slideRef = useRef(null);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${indiceAtual * 100}%)`;
    }
    const botoes = document.querySelectorAll(".botao_carrossel");
    botoes.forEach((botao, i) => {
      botao.classList.toggle("active", i === indiceAtual);
    });
  }, [indiceAtual]);

  function mudarSlide(index) {
    setIndiceAtual(index);
  }

  //Fim da função para o carrossel automatco

  //Inicio da função para o carrossel manual
  const [indiceAtualFeed, setIndiceAtualFeed] = useState(0);
  const larguraImagem = 400;

  const moverCarrossel = (direcao) => {
    setIndiceAtualFeed((prevIndice) => {
      let novoIndice = prevIndice + direcao;

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

  const handleFiltroChange = (e) => {
    const { id, value } = e.target;
    const filtroNome = id.replace("filtro_", "");

    setFiltros((prev) => ({
      ...prev,
      [filtroNome]: value,
    }));
  };

  const removerFiltro = (tipo) => {
    setFiltros((prev) => ({
      ...prev,
      [tipo]: "todos",
    }));
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card_feed");

    cards.forEach((card) => {
      const cardCategoria = card.getAttribute("data-categoria");
      const cardLocal = card.getAttribute("data-local");
      const cardEstado = card.getAttribute("data-estado");

      const matchCategoria =
        filtros.categoria === "todos" || cardCategoria === filtros.categoria;
      const matchLocal =
        filtros.local === "todos" || cardLocal === filtros.local;
      const matchEstado =
        filtros.estado === "todos" || cardEstado === filtros.estado;

      if (matchCategoria && matchLocal && matchEstado) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }, [filtros]);

  const renderChipsFiltros = () => {
    const chips = [];
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

    Object.entries(filtros).forEach(([tipo, valor]) => {
      if (valor !== "todos") {
        chips.push(
          <div className="filtro_chip" key={tipo}>
            <span className="filtro_span">{opcoes[tipo][valor]}</span>
            <button
              className="filtro_button"
              onClick={() => removerFiltro(tipo)}
            >
              <i class="fa-solid fa-x"></i>
            </button>
          </div>
        );
      }
    });

    return chips;
  };
  //Fim da função de listagem

  return (
    <>
      <header>
        <nav className="nav_feed">
          <div className="nav_feed_info">
            <img
              className="logo_feed"
              src="src/assets/imagens/Logo.png"
              alt=""
            />

            <div className="pesquisar">
              <i className="icone_pesquisar fa-solid fa-magnifying-glass"></i>
              <input
                className="campo_pesquisa"
                type="text"
                placeholder="Pesquisar"
              />
            </div>

            <div className="lista_feed">
              <ul className="menu">
                <li>
                  <Link id="link_home" className="link_feed" to="/inicial">
                    Home
                  </Link>
                </li>
                <li>
                  <Link id="link_doe_agora" className="link_feed" to="/criar/doacao">
                    Doe agora
                  </Link>
                </li>
                <li>
                  <Link id="link_pontos_de_coleta" className="link_feed" to="">
                    Pontos de Coleta
                  </Link>
                </li>
                <li className="link_usuario">
                  <Link
                    id="link_usuario"
                    className="link_feed"
                    to="/usuario/empresa"
                  >
                    Usuário
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div class="carrossel-container">
          <div class="carrossel-slide" id="carrossel" ref={slideRef}>
            <div class="slide-conteudo1">
              <div class="carrossel_titulo">
                <img
                  className="img_sustantavel_carrossel"
                  src="src/assets/imagens/sustainable (1) 2.png"
                  alt="Ícone Sustentável"
                />
                <h1 class="titulo">
                  Descarte o seu <span className="e_lixo">e-lixo</span> de forma
                  consciente!
                </h1>
              </div>
              <p class="carrossel_p">
                E-lixo refere-se a equipamentos eletrônicos descartados, como
                celulares, computadores e baterias, que contêm substâncias
                prejudiciais ao meio ambiente.
              </p>
            </div>

            <div class="slide-conteudo2">
              <div class="carrossel_titulo">
                <img
                  src="src/assets/imagens/sustainable (1) 2.png"
                  alt="Ícone Sustentável"
                />
                <h1 class="titulo">
                  Descarte o seu <span className="e_lixo">e-lixo</span> de forma
                  consciente!
                </h1>
              </div>
              <p class="carrossel_p">
                E-lixo refere-se a equipamentos eletrônicos descartados, como
                celulares, computadores e baterias, que contêm substâncias
                prejudiciais ao meio ambiente.
              </p>
            </div>

            <div class="slide-conteudo3">
              <div class="carrossel_titulo">
                <img
                  src="src/assets/imagens/sustainable (1) 2.png"
                  alt="Ícone Sustentável"
                />
                <h1 class="titulo">
                  Descarte o seu <span className="e_lixo">e-lixo</span> de forma
                  consciente!
                </h1>
              </div>
              <p class="carrossel_p">
                E-lixo refere-se a equipamentos eletrônicos descartados, como
                celulares, computadores e baterias, que contêm substâncias
                prejudiciais ao meio ambiente.
              </p>
            </div>

            <div class="slide-conteudo4">
              <div class="carrossel_titulo">
                <img
                  src="src/assets/imagens/sustainable (1) 2.png"
                  alt="Ícone Sustentável"
                />
                <h1 class="titulo">
                  Descarte o seu <span className="e_lixo">e-lixo</span> de forma
                  consciente!
                </h1>
              </div>
              <p class="carrossel_p">
                E-lixo refere-se a equipamentos eletrônicos descartados, como
                celulares, computadores e baterias, que contêm substâncias
                prejudiciais ao meio ambiente.
              </p>
            </div>
          </div>
        </div>

        <div class="botoes-navegacao">
          <span class="botao_carrossel" onclick={() => mudarSlide(0)}></span>
          <span class="botao_carrossel" onclick={() => mudarSlide(1)}></span>
          <span class="botao_carrossel" onclick={() => mudarSlide(2)}></span>
          <span class="botao_carrossel" onclick={() => mudarSlide(3)}></span>
        </div>

        <section className="carrossel_feed">
          <h1 className="titulo_feed">Últimas novidades</h1>

          <button
            id="botao_esquerdo_carrossel"
            className="botao_carrossel_feed"
            onClick={() => moverCarrossel(-1)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="carrossel_container_externa">
            <div
              className="carrossel_cards_container"
              id="carrossel"
              style={estiloDeslizamento}
            >
              <div className="card_feed_carrossel">
                <img
                  className="card_img"
                  src="src/assets/imagens/download 1 (1).png"
                  alt=""
                />
                <p className="tipo_card">Eletrônico</p>
                <div className="card_1">
                  <div className="card_info">
                    <h1 className="titulo_card">Televisão de tubo</h1>
                    <p className="p_card">
                      Ideal para reaproveitamento de peças.
                    </p>
                    <span className="span_card">Floriano – PI</span>
                    <div className="card_meta">
                      <p className="p_card">
                        <i className="fa-solid fa-gear"></i> Para peças
                      </p>
                    </div>
                  </div>
                  <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
                </div>
              </div>

              <div className="card_feed_carrossel">
                <img
                  className="card_img"
                  src="src/assets/imagens/download 3.png"
                  alt=""
                />
                <p className="tipo_card">Eletrônico</p>
                <div className="card_1">
                  <div className="card_info">
                    <h1 className="titulo_card">Placa-mãe ASUS</h1>
                    <p className="p_card">
                      Ideal para reaproveitamento de peças.
                    </p>
                    <span className="span_card">Teresina – PI</span>
                    <div className="card_meta">
                      <p className="p_card">
                        <i className="fa-solid fa-gear"></i> Para peças
                      </p>
                    </div>
                  </div>
                  <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
                </div>
              </div>

              <div className="card_feed_carrossel">
                <img
                  className="card_img"
                  src="src/assets/imagens/OIP 8.png"
                  alt=""
                />
                <p className="tipo_card">Tablet</p>
                <div className="card_1">
                  <div className="card_info">
                    <h1 className="titulo_card">Tablet Samsung</h1>
                    <p className="p_card">
                      Ideal para reaproveitamento de peças.
                    </p>
                    <span className="span_card">Floriano – PI</span>
                    <div className="card_meta">
                      <p className="p_card">
                        <i className="fa-solid fa-gear"></i> Novo
                      </p>
                    </div>
                  </div>
                  <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
                </div>
              </div>

              <div className="card_feed_carrossel">
                <img
                  className="card_img"
                  src="src/assets/imagens/OIP 12.png"
                  alt=""
                />
                <p className="tipo_card">Computador</p>
                <div className="card_1">
                  <div className="card_info">
                    <h1 className="titulo_card">Computador antigo</h1>
                    <p className="p_card">
                      Ideal para reaproveitamento de peças.
                    </p>
                    <span className="span_card">Teresina – PI</span>
                    <div className="card_meta">
                      <p className="p_card">
                        <i className="fa-solid fa-gear"></i> Usado
                      </p>
                    </div>
                  </div>
                  <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
                </div>
              </div>

              <div className="card_feed_carrossel">
                <img
                  className="card_img"
                  src="src/assets/imagens/download 1 (1).png"
                  alt=""
                />
                <p className="tipo_card">Eletrônico</p>
                <div className="card_1">
                  <div className="card_info">
                    <h1 className="titulo_card">Televisão de tubo</h1>
                    <p className="p_card">
                      Ideal para reaproveitamento de peças.
                    </p>
                    <span className="span_card">Floriano – PI</span>
                    <div className="card_meta">
                      <p className="p_card">
                        <i className="fa-solid fa-gear"></i> Para peças
                      </p>
                    </div>
                  </div>
                  <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
                </div>
              </div>

              <div className="card_feed_carrossel">
                <img
                  className="card_img"
                  src="src/assets/imagens/OIP 8.png"
                  alt=""
                />
                <p className="tipo_card">Tablet</p>
                <div className="card_1">
                  <div className="card_info">
                    <h1 className="titulo_card">Tablet Samsung</h1>
                    <p className="p_card">
                      Ideal para reaproveitamento de peças.
                    </p>
                    <span className="span_card">Floriano – PI</span>
                    <div className="card_meta">
                      <p className="p_card">
                        <i className="fa-solid fa-gear"></i> Novo
                      </p>
                    </div>
                  </div>
                  <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
                </div>
              </div>
            </div>
          </div>
          <button
            id="botao_direito_carrossel"
            className="botao_carrossel_feed"
            onClick={() => moverCarrossel(1)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </section>

        <section id="doacoes" className="secao_cards">
          <h1 className="titulo_secao_cards">Doações</h1>
          <div className="filtros_container">
            <div className="filtro_item">
              <label className="label_filtro" htmlFor="filtro_categoria">
                Categoria
              </label>
              <select
                className="filtro_categoria"
                id="filtro_categoria"
                value={filtros.categoria}
                onChange={handleFiltroChange}
              >
                <option value="todos">Todos</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="computadores">Computadores</option>
                <option value="tablets">Tablets</option>
              </select>
            </div>

            <div className="filtro_item">
              <label className="label_filtro" htmlFor="filtro_local">
                Localidade
              </label>
              <select
                className="filtro_categoria"
                id="filtro_local"
                value={filtros.local}
                onChange={handleFiltroChange}
              >
                <option value="todos">Todos</option>
                <option value="floriano">Floriano - PI</option>
                <option value="teresina">Teresina - PI</option>
              </select>
            </div>

            <div className="filtro_item">
              <label className="label_filtro" htmlFor="filtro_estado">
                Estado
              </label>
              <select
                className="filtro_categoria"
                id="filtro_estado"
                value={filtros.estado}
                onChange={handleFiltroChange}
              >
                <option value="todos">Todos</option>
                <option value="novo">Novo</option>
                <option value="usado">Usado</option>
                <option value="pecas">Para peças</option>
              </select>
            </div>
          </div>

          <div className="filtros_ativos" id="filtros_ativos">
            {renderChipsFiltros()}
          </div>

          <div className="cards_secao_cards">
            <div
              className="card_feed"
              data-categoria="eletronicos"
              data-local="teresina"
              data-estado="pecas"
            >
              <img
                className="card_img"
                src="src/assets/imagens/download 3.png"
                alt=""
              />
              <p className="tipo_card">Eletrônico</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Placa-mãe ASUS</h1>
                  <p className="p_card">
                    Ideal para reaproveitamento de peças.
                  </p>
                  <span className="span_card">Teresina – PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Para peças
                    </p>
                  </div>
                </div>
                <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>

            <div
              className="card_feed"
              data-categoria="eletronicos"
              data-local="floriano"
              data-estado="pecas"
            >
              <img
                className="card_img"
                src="src/assets/imagens/download 1 (1).png"
                alt=""
              />
              <p className="tipo_card">Eletrônico</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Televisão de tubo</h1>
                  <p className="p_card">
                    Ideal para reaproveitamento de peças.
                  </p>
                  <span className="span_card">Floriano - PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Para peças
                    </p>
                  </div>
                </div>
                <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>

            <div
              className="card_feed"
              data-categoria="tablets"
              data-local="floriano"
              data-estado="novo"
            >
              <img
                className="card_img"
                src="src/assets/imagens/OIP 8.png"
                alt=""
              />
              <p className="tipo_card">Tablet</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Tablet Samsung</h1>
                  <p className="p_card">
                    Ideal para reaproveitamento de peças.
                  </p>
                  <span className="span_card">Floriano – PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Novo
                    </p>
                  </div>
                </div>
                <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>

            <div
              className="card_feed"
              data-categoria="computadores"
              data-local="teresina"
              data-estado="usado"
            >
              <img
                className="card_img"
                src="src/assets/imagens/OIP 12.png"
                alt=""
              />
              <p className="tipo_card">Computador</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Computador antigo</h1>
                  <p className="p_card">
                    Ideal para reaproveitamento de peças.
                  </p>
                  <span className="span_card">Teresina – PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Usado
                    </p>
                  </div>
                </div>
                <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>

            <div
              className="card_feed"
              data-categoria="eletronicos"
              data-local="floriano"
              data-estado="usado"
            >
              <img
                className="card_img"
                src="src/assets/imagens/OIP 13.png"
                alt=""
              />
              <p className="tipo_card">Eletrônico</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Calculadora Citizen</h1>
                  <p className="p_card">
                    Ideal para reaproveitamento de peças.
                  </p>
                  <span className="span_card">Floriano – PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Usado
                    </p>
                  </div>
                </div>
                <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>

            <div
              className="card_feed"
              data-categoria="computadores"
              data-local="floriano"
              data-estado="usado"
            >
              <img
                className="card_img"
                src="src/assets/imagens/41bac784103365e504f461626c9683d5 3.png"
                alt=""
              />
              <p className="tipo_card">Computador</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Monitor AOC</h1>
                  <p className="p_card">
                    Ideal para reaproveitamento de peças.
                  </p>
                  <span className="span_card">Floriano – PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Usado
                    </p>
                  </div>
                </div>
                <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>

            <div
              className="card_feed"
              data-categoria="tablets"
              data-local="floriano"
              data-estado="novo"
            >
              <img
                className="card_img"
                src="src/assets/imagens/OIP 8.png"
                alt=""
              />
              <p className="tipo_card">Tablet</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Tablet Samsung</h1>
                  <p className="p_card">Ideal para reaproveitamento de peças.</p>
                  <span className="span_card">Floriano – PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Novo
                    </p>
                  </div>
                </div>
                <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>

            <div
              className="card_feed"
              data-categoria="eletronicos"
              data-local="floriano"
              data-estado="pecas"
            >
              <img
                className="card_img"
                src="src/assets/imagens/download 1 (1).png"
                alt=""
              />
              <p className="tipo_card">Eletrônico</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Televisão de tubo</h1>
                  <p className="p_card">
                    Ideal para reaproveitamento de peças.
                  </p>
                  <span className="span_card">Floriano - PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Para peças
                    </p>
                  </div>
                </div>
                <Link  className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>

            <div
              className="card_feed"
              data-categoria="eletronicos"
              data-local="teresina"
              data-estado="pecas"
            >
              <img
                className="card_img"
                src="src/assets/imagens/download 3.png"
                alt=""
              />
              <p className="tipo_card">Eletrônico</p>
              <div className="card_1">
                <div className="card_info">
                  <h1 className="titulo_card">Placa-mãe ASUS</h1>
                  <p className="p_card">
                    Ideal para reaproveitamento de peças.
                  </p>
                  <span className="span_card">Teresina – PI</span>
                  <div className="card_meta">
                    <p className="p_card">
                      <i className="fa-solid fa-gear"></i> Para peças
                    </p>
                  </div>
                </div>
                <Link className="link_card_feed" to="/informacao/doacao"><button className="botao_card">Saber mais</button></Link>
              </div>
            </div>
            
          </div>
        </section>
      </main>

      <footer id="footer_feed">
        <div id="footer_content">
          <div id="footer_contacts">
            <img
              src="src/assets/imagens/sustainable (1) 2.png"
              alt="Ícone Sustentável"
            />
            <p>Juntos por um futuro mais sustentável.</p>
            <div className="footer_social_media">
              <a href="#" className="footer_link" id="instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="footer_link" id="facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="footer_link" id="whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <ul className="footer_list">
            <li>
              <h3>Ecotech</h3>
            </li>
            <li>
              <a href="#" className="footer_link">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#doacoes" className="footer_link">
                Doações
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Pontos de coleta
              </a>
            </li>
          </ul>

          <ul className="footer_list">
            <li>
              <h3>O que doar?</h3>
            </li>
            <li>Periféricos (teclado, mouse)</li>
            <li>Impressoras</li>
            <li>Eletroportáteis (tipo rádio)</li>
          </ul>

          <div className="footer_subscribe">
            <h3>Receba novidades</h3>
            <p className="p_subscribe">
              Informe seu e-mail para receber dicas de descarte,
              sustentabilidade e novidades da plataforma.
            </p>
            <div className="input_group">
              <input type="email" className="email" />
              <button className="botao_footer_feed">
                <i class="fa-solid fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="footer_copyright">
          &copy; 2025 ECOTECH. Todos os direitos reservados. Desenvolvido com
          propósito sustentável.
        </div>
      </footer>
    </>
  );
}

export default TelaFeed;
