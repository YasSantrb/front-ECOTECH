import styles from "../styles/tela_criar_doacao.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_camera from "../assets/imagens/icon-camera.png"; 

function TelaCriarDoacao() {
  return (
    <div className={styles.tela_criar_doacao}>
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

      <div className={styles.form_doacao}>
        <h2>Criar doação</h2>
        <p className={styles.subtitulo}>Preencha os campos abaixo para criar a sua doação!</p>

        <div className={styles.form_campos}>
          <div className={styles.coluna_esquerda}>
            <label>Nome</label>
            <input type="text" placeholder="Insira o nome do eletrônico*" />

            <label>Especificação</label>
            <input type="text" placeholder="Ex: Modelo com entradas AV tradicionais." />

            <label>Descrição geral do eletrônico</label>
            <textarea placeholder="Ex: Ideal para empresas que desejam reciclar eletrônicos ou entusiastas que queiram reaproveitar peças." />
          </div>
          
          <div className={styles.divisoria}></div> 

          <div className={styles.coluna_direita}>
            <label>Condição do eletrônico</label>
            <input type="text" placeholder="Insira a condição do eletrônico*" />

            <label>Observação</label>
            <input type="text" placeholder="Ex: Ideal para reciclagem." />

            <label>Insira as fotos do eletrônico</label>
            <div className={styles.area_fotos}>
              <div className={styles.foto_placeholder}>
                <img src={icon_camera} alt="ícone câmera" className={styles.icon_camera} />
              </div>
              <div className={styles.foto_placeholder}>
                <img src={icon_camera} alt="ícone câmera" className={styles.icon_camera} />
              </div>
            </div>
          </div>
        </div>

        <button className={styles.botao_enviar}>Enviar doação!</button>
      </div>
    </div>
  );
}

export default TelaCriarDoacao;
