import "../styles/tela_criar_doacao.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_camera from "../assets/imagens/icon-camera.png"; 

function TelaCriarDoacao() {
  return (
    <div className="tela_criar_doacao">
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className="background_tela"
      />

      <div className="top-bar-doacao">
        <a href="/" className="voltar">
          <img src={icon_voltar} alt="voltar" className="icone-voltar" />
          VOLTAR
        </a>
      </div>

      <div className="form-doacao">
        <h2>Criar doação</h2>
        <p className="subtitulo">Preencha os campos abaixo para criar a sua doação!</p>

        <div className="form-campos">
          <div className="coluna-esquerda">
            <label>Nome</label>
            <input type="text" placeholder="Insira o nome do eletrônico*" />

            <label>Especificação</label>
            <input type="text" placeholder="Ex: Modelo com entradas AV tradicionais." />

            <label>Descrição geral do eletrônico</label>
            <textarea placeholder="Ex: Ideal para empresas que desejam reciclar eletrônicos ou entusiastas que queiram reaproveitar peças." />
          </div>
          
          <div className="divisoria"></div> 

          <div className="coluna-direita">
            <label>Condição do eletrônico</label>
            <input type="text" placeholder="Insira a condição do eletrônico*" />

            <label>Observação</label>
            <input type="text" placeholder="Ex: Ideal para reciclagem." />

            <label>Insira as fotos do eletrônico</label>
            <div className="area-fotos">
              <div className="foto-placeholder">
                <img src={icon_camera} alt="ícone câmera" className="icon-camera" />
              </div>
              <div className="foto-placeholder">
                <img src={icon_camera} alt="ícone câmera" className="icon-camera" />
              </div>
            </div>
          </div>
        </div>

        <button className="botao-enviar">Enviar doação!</button>
      </div>
    </div>
  );
}

export default TelaCriarDoacao;
