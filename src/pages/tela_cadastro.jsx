import "../styles/tela_cadastro.css";
import Logo from "../assets/imagens/Logo.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";

function TelaCadastro() {
  return (
    <div className="conteiner">
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className="background"
      />

      <form className="formulario_cadastro">
        <img src={Logo} />
        <h1 className="titulo_cadastro">Insira os seus dados</h1>
        <div id="divmae">
          <div className="item">
            <p className="cadastro_p">Nome do Usuário</p>
            <input
              className="input_cadastro"
              placeholder="Insira seu nome de usuário*"
              name="Nome"
              type="text"
            />
            <p className="cadastro_p">Email</p>
            <input
              className="input_cadastro"
              placeholder="Insira o seu email*"
              name="Email"
              type="email"
            />
            <p className="cadastro_p">Senha</p>
            <input
              className="input_cadastro"
              placeholder="Insira a sua senha*"
              name="Senha"
              type="password"
            />
          </div>
          <div className="item">
            <p className="cadastro_p">Confirmar senha</p>
            <input
              className="input_cadastro"
              placeholder="Confirme a sua senha*"
              name="Confirmar-senha"
              type="password"
            />
            <p className="cadastro_p">CPF/CNPJ</p>
            <input
              className="input_cadastro"
              type="text"
              name="CPF/CNPJ"
              placeholder="Insira seu CPF ou CNPJ"
            />
            <p className="cadastro_p">Tipo de usuário</p>
            <div className="form-group">
              <select name="tipoUsuario">
                <option value="doador">Doador</option>
                <option value="empresa">Empresa</option>
              </select>
            </div>
          </div>
        </div>
        <button className="botao_cadastro" type="button">
          Cadastrar
        </button>
        <p className="cadastro_p">Já é cadastrado? Faça Login</p>
      </form>
    </div>
  );
}

export default TelaCadastro;
