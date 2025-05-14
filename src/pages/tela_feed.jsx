import { Link } from "react-router-dom";
import "../styles/tela_feed.css";

function TelaFeed() {
  return (
    <>
      <header>
        <nav className="nav_feed">
          <div className="nav_feed_info">
            <img src="src/assets/imagens/Logo.png" alt="" />

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
                  <Link className="link_feed" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link_feed">Doe agora</Link>
                </li>
                <li>
                  <Link className="link_feed" to="/usuario/doador">Usuário Doador</Link>
                </li>
                 <li>
                  <Link className="link_feed" to="/usuario/empresa">Usuário Empresa</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="carrossel_feed">
          <div className="carrossel_titulo">
            <img src="src/assets/imagens/sustainable (1) 2.png" alt="" />
            <h1 className="titulo">
              Descarte o seu <span>e-lixo</span> de forma consciente!
            </h1>
          </div>
          <div>
            <p className="carrossel_p">
              E-lixo refere-se a equipamentos eletrônicos descartados, como
              celulares, computadores e baterias, que contêm substâncias
              prejudiciais ao meio ambiente.
            </p>
          </div>
        </div>

        <section className="secao_cards">
          <div className="secao_info">
            <div>
              <h1 className="titulo_feed">Últimas novidades</h1>
            </div>

            <div className="secao_cards">
              <div className="card_feed">
                <img
                  className="card_img"
                  src="src/assets/imagens/download 1 (1).png"
                  alt=""
                />
                <div className="card_1">
                  <div className="card_info">
                    <h1>Televisão de tubo</h1>
                    <p>Ideal para reaproveitamento de peças.</p>
                    <span>Floriano – PI</span>
                  </div>
                  <button className="botao_card">Saber mais</button>
                </div>
              </div>

              <div className="card_feed">
                <img
                  className="card_img"
                  src="src/assets/imagens/download 3.png"
                  alt=""
                />
                <div className="card_1">
                  <div className="card_info">
                    <h1>Placa-mãe ASUS</h1>
                    <p>Ideal para reaproveitamento de peças.</p>
                    <span>Floriano – PI</span>
                  </div>
                  <button>Saber mais</button>
                </div>
              </div>

              <div className="card_feed">
                <img
                  className="card_img"
                  src="src/assets/imagens/OIP 8.png"
                  alt=""
                />
                <div className="card_1">
                  <div className="card_info">
                    <h1>Tablet Samsung</h1>
                    <p>Ideal para reaproveitamento de peças.</p>
                    <span>Floriano – PI</span>
                  </div>
                  <button>Saber mais</button>
                </div>
              </div>

              <div className="card_feed">
                <img
                  className="card_img"
                  src="src/assets/imagens/OIP 8.png"
                  alt=""
                />
                <div className="card_1">
                  <div className="card_info">
                    <h1>Tablet Samsung</h1>
                    <p>Ideal para reaproveitamento de peças.</p>
                    <span>Floriano – PI</span>
                  </div>
                  <button>Saber mais</button>
                </div>
              </div>

              <div className="card_feed">
                <img
                  className="card_img"
                  src="src/assets/imagens/download 3.png"
                  alt=""
                />
                <div className="card_1">
                  <div className="card_info">
                    <h1>Placa-mãe ASUS</h1>
                    <p>Ideal para reaproveitamento de peças.</p>
                    <span>Floriano – PI</span>
                  </div>
                  <button>Saber mais</button>
                </div>
              </div>

              <div className="card_feed">
                <img
                  className="card_img"
                  src="src/assets/imagens/download 1 (1).png"
                  alt=""
                />
                <div className="card_1">
                  <div className="card_info">
                    <h1>Televisão de tubo</h1>
                    <p>Ideal para reaproveitamento de peças.</p>
                    <span>Floriano – PI</span>
                  </div>
                  <button className="botao_card">Saber mais</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default TelaFeed;
