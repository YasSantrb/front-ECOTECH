import styles from "../styles/tela_registro_pontos_coleta.module.css";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";

function TelaRegistroPontosColeta() {
  return (
    <div className={styles.tela_registro_pontos_coleta}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />
      <div className={styles.top_bar_doacao}>
        <a href="/" className={styles.voltar}>
          <img src={icon_voltar} alt="voltar" className={styles.icone_voltar} />
          VOLTAR
        </a>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.Coletas}>
          <h2>Meus Pontos de Coleta</h2>
        </div>
        <div className={styles.registrar}>
          <h2>Registrar Ponto de coleta</h2>
          <div className={styles.divmae}>
            <div className={styles.divCh}>
              <p>Rua</p>
              <input type="text" placeholder="Insira a Rua"></input>
              <p>Bairro</p>
              <input type="text" placeholder="Insira o Bairro"></input>
              <p>CEP</p>
              <input type="number" placeholder="Insira o CEP "></input>
            </div>
            <div className={styles.divCh}>
              <p>Número do local</p>
              <input type="number" placeholder="Insira o número do local de doação"></input>
              <p>Observação</p>
              <textarea placeholder="Informe ao doador mais detalhes do local"></textarea>
              <button
                onClick={() => {
                  const confirmacao = window.confirm("Tem certeza que deseja registrar o ponto?");
                  if (confirmacao) {
                    console.log("Ponto registrado!");
                    window 
                  } else {
                    // ação cancelada
                    console.log("Registro cancelado.");
                  }
                }}
              >
                Registrar Ponto
              </button>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
}

export default TelaRegistroPontosColeta;
