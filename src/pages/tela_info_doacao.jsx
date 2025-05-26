import "../styles/tela_info_doacao.css";
// import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";

function TelaInfoDoacao() {
  return (
    <div className="TelaInfoDoacao">
      {/* <div className="background_tela">
        <img
          src={fundo_login_cadastro}
          alt="imagem_de_fundo"
          className="background_tela"
        />
      </div> */}
      <div id="conteiner">
        <div>
          <p>foto do item</p>
          <p>Doador:</p>
          <p>Especificações:</p>
        </div>
        <div>
          <p>nome do item</p>
          <p>Informações sobre o produto:</p>
          <p>Condição:</p>
          <p>Observações:</p>
          <button>Agendar Coleta!</button>
        </div>
      </div>
    </div>
  );
}

export default TelaInfoDoacao;
