import styles from "../styles/tela_historico_doacoes.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import PopUpSucesso from "../components/popUpSucesso";
import { useState } from "react";
import { Link } from "react-router-dom";

function TelaPontosColeta() {
  const [pontosColeta, setPontosColeta] = useState([
    {
      id: "1",
      nome: "EcoLixo",
      cidade: "Floriano - PI",
      rua: "Avenida João Luís",
      bairro: "Centro",
      numero: "677",
      cep: "64800-086",
      telefone: "899916-1616",
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
    },
    {
      id: "2",
      nome: "TecnoVerde",
      cidade: "Floriano - PI",
      rua: "Rua Francisco ",
      bairro: "Campo Velho",
      numero: "11",
      cep: "64800-003",
      telefone: "899915-1515",
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
    },
    {
      id: "3",
      nome: "EcoPonto",
      cidade: "Barão de Grajaú - MA",
      rua: "Rua Tonico Soares",
      bairro: "Centro",
      numero: "1025",
      cep: "64800-009",
      telefone: "899914-1414",
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
    },
    {
      id: "4",
      nome: "ReCiclaHub",
      cidade: "Teresina - PI",
      rua: "Avenida Pedro Frei",
      bairro: "Vermelha",
      numero: "49",
      cep: "64800-086",
      telefone: "869913-1313",
      horarioFuncionamento: "Seg a Sex: 8h às 18h",
    },
  ]);

  const [isModalDetalhesOpen, setIsModalDetalhesOpen] = useState(false);
  const [pontoSelecionado, setPontoSelecionado] = useState(null);

  function abrirDetalhes(pontoSelecionado) {
    setPontoSelecionado(pontoSelecionado);
    setIsModalDetalhesOpen(true);
  }

  function fecharDetalhes() {
    setIsModalDetalhesOpen(false);
    setPontoSelecionado(null);
  }

  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [rua, setRua] = useState("");
  const [telefone, setTelefone] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCEP] = useState("");
  const [numero, setNumero] = useState("");
  const [horarioFuncionamento, setHorarioFuncionamento] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  function abrirModalEditar() {
    setRua(pontoSelecionado.rua);
    setTelefone(pontoSelecionado.telefone);
    setNumero(pontoSelecionado.numero);
    setCEP(pontoSelecionado.cep);
    setBairro(pontoSelecionado.bairro);
    setHorarioFuncionamento(pontoSelecionado.horarioFuncionamento);
    setIsEditarModalOpen(true);
    setIsModalDetalhesOpen(false);
  }

  function fecharModalEditar() {
    setIsEditarModalOpen(false);
  }

  function editarPerfil(evento) {
    evento.preventDefault();

    const perfilAtualizado = {
      ...pontoSelecionado,
      rua,
      bairro,
      cep,
      numero,
      telefone,
      horarioFuncionamento,
    };

    setPontosColeta((dadosAntigos) =>
      dadosAntigos.map((ponto) =>
        ponto.id === perfilAtualizado.id ? perfilAtualizado : ponto
      )
    );
    setPontoSelecionado(perfilAtualizado);
    setIsEditarModalOpen(false);
    setIsModalDetalhesOpen(true)
    setMensagemSucesso("Ponto de coleta atualizado com sucesso!");
    setTimeout(() => {
      setMensagemSucesso(null);
    }, 2000);
  }

  const [isExcluirModalOpen, setIsExcluirModalOpen] = useState(false);

  function abrirModalExcluir() {
    setIsExcluirModalOpen(true);
  }

  function fecharModalExcluir() {
    setIsExcluirModalOpen(false);
  }

  function excluirPonto(e) {
    e.preventDefault();

    if (!pontoSelecionado) {
      console.error("Nenhum ponto de coleta selecionado para excluir.");
      return;
    }

    setPontosColeta((prevBlocos) =>
      prevBlocos.filter((ponto) => ponto.id !== pontoSelecionado.id)
    );

    setPontoSelecionado(null);
    fecharModalExcluir();
    setMensagemSucesso("Ponto de coleta excluído com sucesso!");
    setTimeout(() => {
      setMensagemSucesso(null);
      setIsModalDetalhesOpen(false);
    }, 2000);
  }

  return (
    <>
      <div className={styles.tela_historico_doacoes}>
        {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
        <img
          src={fundo_login_cadastro}
          alt="imagem_de_fundo"
          className={styles.background_tela}
        />
        <div className={styles.barra_voltar}>
          <Link className={styles.link_voltar} to="/">
            <img
              className={styles.icon_voltar}
              src={icon_voltar}
              alt="voltar"
            />
            <p className={styles.nav_p}>VOLTAR</p>
          </Link>
        </div>
        <div className={styles.container_verde}>
          <div className={styles.header_container}>
            <h2 className={styles.titulo}>Pontos de Coleta</h2>
            <p className={styles.subtitulo}>Veja os seus pontos de coleta</p>
          </div>

          <div className={styles.tabela_container}>
            <table className={styles.tabela_doacoes}>
              <thead>
                <tr>
                  <th>Rua</th>
                  <th>Bairro</th>
                  <th>CEP</th>
                  <th>Número</th>
                  <th>Telefone</th>
                  <th>Horário Funcionamento</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {pontosColeta.map((a) => (
                  <tr key={a.id}>
                    <td>{a.rua}</td>
                    <td>{a.bairro}</td>
                    <td>{a.cep}</td>
                    <td>{a.numero}</td>
                    <td>{a.telefone}</td>
                    <td>{a.horarioFuncionamento}</td>
                    <td>
                      <button
                        className={styles.botao_detalhes}
                        onClick={() => abrirDetalhes(a)}
                      >
                        Ver detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isModalDetalhesOpen && (
            <div className={styles.popUpOverlay}>
              <div className={styles.popUpCard}>
                <div className={styles.popUpHeader}>
                  <h3 className={styles.popUpTitulo}>
                    Detalhes do Ponto de Coleta
                  </h3>
                  <button
                    className={styles.popUpBotaoFechar}
                    onClick={fecharDetalhes}
                  >
                    &times;
                  </button>
                </div>
                <div className={styles.popUpContent}>
                  <div className={styles.info_modal}>
                    <p>
                      <strong>Rua:</strong> {pontoSelecionado?.rua}
                    </p>
                    <p>
                      <strong>Bairro:</strong> {pontoSelecionado?.bairro}
                    </p>
                    <p>
                      <strong>CEP:</strong> {pontoSelecionado?.cep}
                    </p>

                    <p>
                      <strong>Número:</strong> {pontoSelecionado?.numero}
                    </p>

                    <p>
                      <strong>Telefone:</strong> {pontoSelecionado?.telefone}
                    </p>

                    <p>
                      <strong>Horário Funcionamento:</strong>{" "}
                      {pontoSelecionado?.horarioFuncionamento}
                    </p>
                  </div>

                  <div className={styles.popUp_botoes}>
                    <button
                      className={styles.botao_cancelar_agendamento}
                      onClick={abrirModalExcluir}
                    >
                      Excluir ponto
                    </button>

                    <button
                      className={styles.botao_confirmar_agendamento}
                      onClick={() => abrirModalEditar()}
                    >
                      Editar ponto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isExcluirModalOpen && (
            <div className={styles.popUpOverlay}>
              <div className={styles.popUpCard}>
                <div className={styles.popUpHeader}>
                  <h3 className={styles.popUpTitulo}>
                    Excluir ponto de coleta
                  </h3>
                  <button
                    className={styles.popUpBotaoFechar}
                    onClick={fecharModalExcluir}
                  >
                    &times;
                  </button>
                </div>
                <div className={styles.popUpContent}>
                  <p className={styles.modal_informacoes_p}>
                    Você tem certeza que deseja excluir esse ponto de coleta?
                  </p>
                  <div className={styles.popUp_botoes}>
                    <button
                      className={styles.botao_cancelar_agendamento}
                      onClick={fecharModalExcluir}
                    >
                      Cancelar
                    </button>
                    <button
                      className={styles.botao_confirmar_agendamento}
                      onClick={excluirPonto}
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isEditarModalOpen && (
            <div className={styles.popUpOverlay}>
              <div className={styles.popUpCard}>
                <div className={styles.popUpHeader}>
                  <h3 className={styles.popUpTitulo}>Editar informações</h3>
                  <button
                    className={styles.popUpBotaoFechar}
                    onClick={fecharModalEditar}
                  >
                    &times;
                  </button>
                </div>
                <div className={styles.popUpContent}>
                  <div className={styles.inputs}>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>Nome rua</label>
                      <input
                        className={styles.input}
                        type="text"
                        value={rua}
                        placeholder="Insira o novo nome da rua"
                        onChange={(e) => setRua(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>Telefone</label>
                      <input
                        className={styles.input}
                        type="text"
                        value={telefone}
                        placeholder="Insira o novo telefone!"
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>Bairro</label>
                      <input
                        className={styles.input}
                        type="text"
                        value={bairro}
                        placeholder="Insira o novo bairro"
                        onChange={(e) => setBairro(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>Número</label>
                      <input
                        className={styles.input}
                        type="text"
                        value={numero}
                        placeholder="Insira o novo número"
                        onChange={(e) => setNumero(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>CEP</label>
                      <input
                        className={styles.input}
                        type="text"
                        value={cep}
                        placeholder="Insira o novo CEP"
                        onChange={(e) => setCEP(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.campo}>
                      <label className={styles.label_modal}>
                        Horário funcionamento
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        value={horarioFuncionamento}
                        placeholder="Insira o novo horário de funcionamento"
                        onChange={(e) =>
                          setHorarioFuncionamento(e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.popUp_botoes}>
                    <button
                      className={styles.botao_confirmar_agendamento}
                      onClick={editarPerfil}
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TelaPontosColeta;
