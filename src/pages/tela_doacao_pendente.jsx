import styles from "../styles/tela_doacao_pendente.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_editar from "../assets/imagens/icon_editar.png";
import icon_lixeira from "../assets/imagens/icon_lixeira.png";
import icon_user from "../assets/imagens/icon_user.png";
import icon_lista from "../assets/imagens/icon_lista.png";
import tv_tubo from "../assets/imagens/tv_tubo.png";
import { Link } from 'react-router-dom';

function TelaDoacaoPendente() {
  return (
    <div className={styles.tela_doacao_pendente}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />

      <a href="/" className={styles.voltar}>
        <img src={icon_voltar} alt="voltar" className={styles.icone_voltar} />
        VOLTAR
      </a>

      <div className={styles.card_doacao}>
        <div className={styles.header_topo}>
          <div className={styles.botoes_acoes}>

            <button className={styles.botao_editar}>
              <img src={icon_editar} alt="editar" />
              Editar
            </button>
            
            <button className={styles.botao_excluir}>
              <img src={icon_lixeira} alt="excluir" />
              Excluir
            </button>
          </div>
        </div>

        <div className={styles.conteudo}>
          <div className={styles.imagem}>
            <img
              src={tv_tubo}
              alt="televisão de tubo"
              className={styles.img_tv}
            />
          <Link to="/chat" className={styles.botao_contato}>Entrar em contato!</Link>


            <p className={styles.icone_texto}>
              <img src={icon_user} alt="doador" />
              <strong>Doador:</strong> Ana Clara Lima
            </p>

            <div className={styles.icone_texto}>
              <img src={icon_lista} alt="especificações" />
              <div>
                <strong>Especificações:</strong><br />
                Tela de 29 polegadas, som estéreo, entrada AV.
                </div>
          </div>
          </div>

          <div className={styles.descricao}>
            <h2>Televisão de tubo 29</h2>

            <p className={styles.titulo_secao}>Informações sobre o produto:</p>
            <p>
              TV de tubo clássica em bom estado. Ideal para quem busca um toque
              vintage ou para uso em projetos de reaproveitamento de peças.
            </p>

            <p className={styles.titulo_secao}>Condição:</p>
            <p>Usado</p>

            <p className={styles.titulo_secao}>Observação:</p>
            <p>Pode ser reutilizado ou ter partes aproveitadas.</p>

            
            <Link to="/agendamento" className={styles.botao_coleta}>Agendar coleta!</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaDoacaoPendente; 