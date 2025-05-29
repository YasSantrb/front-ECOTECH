import styles from "../styles/tela_chat.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import Logo from "../assets/imagens/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TelaChat() {
  const navigate = useNavigate();
  const contatos = [
    {
      id: 1,
      imagem: "src/assets/imagens/logo_ecotech_chat.PNG",
      nome: "EcoTech",
      status: "Online",
      mensagemContato: "-João Ribeiro agendou a colet...",
      mensagensChat: [
        { texto: "15/05/2025", tipo: "data" },
        {
          texto:
            "João Ribeiro agendou a coleta do notebook Dell Inspiron para o dia 26/05/2025, às 16:00, na cidade de Floriano-PI.",
          tipo: "notificacao",
          hora_mensagem: "10:05",
        },
      ],
      lida: true,
      isNotificacao: true,
    },
    {
      id: 2,
      imagem: "src/assets/imagens/woman.png",
      nome: "Bruna Leal",
      status: "Visto há 2 horas",
      mensagemContato: "-Certinho!",
      mensagensChat: [
        { texto: "23/04/2025", tipo: "data" },
        {
          texto: "Olá! Gostaria de agendar uma coleta de um notebook usado.",
          tipo: "recebida",
          hora_mensagem: "10:05",
        },
        {
          texto: "Olá! Claro, qual data seria melhor para você?",
          tipo: "enviada",
          hora_mensagem: "10:10",
        },
        {
          texto: "Pode ser no dia 26/05/2025, no período da tarde?",
          tipo: "recebida",
          hora_mensagem: "10:12",
        },
        {
          texto: "Sim, tenho disponibilidade às 16:00. Está bom para você?",
          tipo: "enviada",
          hora_mensagem: "10:13",
        },
        {
          texto: "Perfeito! Qual o endereço para a coleta?",
          tipo: "recebida",
          hora_mensagem: "10:15",
        },
        {
          texto: "Rua das Flores, 123, Floriano-PI.",
          tipo: "enviada",
          hora_mensagem: "10:15",
        },
        { texto: "Certinho!", tipo: "recebida", hora_mensagem: "10:16" },
      ],
      lida: true,
      isNotificacao: false,
    },
    {
      id: 3,
      imagem: "src/assets/imagens/ceo.png",
      nome: "Lucas Santana",
      status: "Online",
      mensagemContato: "Obrigado! Estarei lá no horário...",
      mensagensChat: [
        { texto: "19/05/2025", tipo: "data" },
        {
          texto:
            "Olá, vi que você está doando uma placa mãe asus e gostaria de agendar a coleta.",
          tipo: "recebida",
          hora_mensagem: "09:30",
        },
        {
          texto:
            "Olá! Que bom que se interessou. Qual data você tem disponível?",
          tipo: "enviada",
          hora_mensagem: "09:32",
        },
        {
          texto: "Podemos marcar para o dia 26/05, à tarde?",
          tipo: "recebida",
          hora_mensagem: "09:35",
        },
        {
          texto: "Sim, à tarde funciona. Qual horário seria melhor para você?",
          tipo: "enviada",
          hora_mensagem: "09:37",
        },
        {
          texto: "Por volta das 16h, se possível.",
          tipo: "recebida",
          hora_mensagem: "09:40",
        },
        {
          texto: "Perfeito! Me envie o endereço.",
          tipo: "recebida",
          hora_mensagem: "09:42",
        },
        {
          texto: "Endereço: Rua das Palmeiras, 123, Floriano-PI.",
          tipo: "enviada",
          hora_mensagem: "09:44",
        },
        {
          texto: "Obrigado! Estarei lá no horário combinado.",
          tipo: "recebida",
          hora_mensagem: "09:45",
        },
      ],
      lida: true,
      isNotificacao: false,
    },
    {
      id: 4,
      imagem: "src/assets/imagens/businessman.png",
      nome: "Caique Portela",
      status: "Visto há 1 hora",
      mensagemContato: "-Combinado!",
      mensagensChat: [
        { texto: "14/05/2025", tipo: "data" },
        {
          texto:
            "Olá, gostaria de agendar a coleta do notebook Dell Inspiron 15.",
          tipo: "recebida",
          hora_mensagem: "10:05",
        },
        {
          texto:
            "Olá! Quando você gostaria de retirar o notebook Dell Inspiron 15?",
          tipo: "enviada",
          hora_mensagem: "10:06",
        },
        {
          texto: "Pode ser no dia 28/05 pela manhã?",
          tipo: "recebida",
          hora_mensagem: "10:07",
        },
        { texto: "Pode sim!", tipo: "enviada", hora_mensagem: "10:08" },
        { texto: "Combinado!", tipo: "recebida", hora_mensagem: "10:08" },
      ],
      lida: true,
      isNotificacao: false,
    },
    {
      id: 5,
      imagem: "src/assets/imagens/woman (1).png",
      nome: "Nicole Nascimento",
      status: "online",
      mensagemContato: "Por nada!",
      mensagensChat: [
        { texto: "25/05/2025", tipo: "data" },
        { texto: "Olá! Tudo bem?", tipo: "recebida", hora_mensagem: "10:05" },
        {
          texto: "Oi! Tudo bem, e você?",
          tipo: "enviada",
          hora_mensagem: "10:06",
        },
        {
          texto:
            "Estou bem, obrigado. Agendei a coleta da TV de 60 polegadas que você postou para o dia 01/06/2025. Poderia me passar o endereço com mais detalhes?",
          tipo: "recebida",
          hora_mensagem: "10:07",
        },
        {
          texto:
            "Claro! O endereço é Rua das Flores, 123, apto 45, Bairro Centro.",
          tipo: "enviada",
          hora_mensagem: "10:08",
        },
        { texto: "Hoje", tipo: "data" },
        {
          texto: "Perfeito, muito obrigada!",
          tipo: "recebida",
          hora_mensagem: "10:09",
        },
        { texto: "Por nada!", tipo: "enviada", hora_mensagem: "10:09" },
      ],
      lida: true,
      isNotificacao: false,
    },
  ];

  const [contatoSelecionado, setContatoSelecionado] = useState(null);
  const [mensagens, setMensagens] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [pesquisa, setPesquisa] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("todos");

  const selecionarContato = (index) => {
    setContatoSelecionado(index);
    setMensagens([...contatos[index].mensagensChat]);
  };

  const enviarMensagem = () => {
    if (
      contatoSelecionado === null ||
      contatos[contatoSelecionado].isNotificacao
    )
      return;
    if (mensagem.trim() === "") return;

    const novaMensagem = {
      texto: mensagem,
      tipo: "enviada",
      hora_mensagem: obterHoraAtual(),
    };

    const novosChats = [...mensagens, novaMensagem];
    setMensagens(novosChats);
    setMensagem("");

    setTimeout(() => {
      setMensagens((mensagensAnteriores) => [
        ...mensagensAnteriores,
        { texto: mensagem, tipo: "recebida", hora_mensagem: obterHoraAtual() },
      ]);
    }, 1500);
  };

  const contatosFiltrados = contatos.filter((contato) => {
    const filtrarNome = contato.nome
      ?.toLowerCase()
      .includes(pesquisa.toLowerCase());
    const filtrarMensagemContato = contato.mensagemContato
      ?.toLowerCase()
      .includes(pesquisa.toLowerCase());
    const filtrarMensagens = contato.mensagensChat?.some((mensagem) =>
      mensagem.texto.toLowerCase().includes(pesquisa.toLowerCase())
    );

    if (statusFiltro === "nao_lidas" && contato.lida) return false;

    return filtrarNome || filtrarMensagemContato || filtrarMensagens;
  });

  function obterHoraAtual() {
    const dataAtual = new Date();
    const hora = String(dataAtual.getHours()).padStart(2, "0");
    const minutos = String(dataAtual.getMinutes()).padStart(2, "0");
    const horaFormatada = `${hora}:${minutos}`;
    return horaFormatada;
  }

  return (
    <div className={styles.tela_chat}>
      <main>
        <div className={styles.container_chat}>
          <div className={styles.chat_contatos}>
            <nav className={styles.nav_chat}>
              <button className={styles.link_chat_voltar} onClick={() => navigate(-1)}>
                <img className={styles.icon_voltar_chat} src={icon_voltar} alt="" />
                <p className={styles.nav_chat_p}>VOLTAR</p>
              </button>
            </nav>
            <div className={styles.info_contatos}>
              <div className={styles.logo_chat_div}>
                <img className={styles.logo_chat} src={Logo} alt="" />
              </div>
              <div className={styles.filtros_chat}>
                <div className={styles.pesquisar_contato}>
                  <i className={`${styles.icone_pesquisar_chat} fa-solid fa-magnifying-glass`}></i>
                  <input
                    className={styles.filtro_input_chat}
                    type="text"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    placeholder="Buscar por contato..."
                  />
                </div>
                <div className={styles.botoes_filtros_chat}>
                  <button
                    onClick={() => setStatusFiltro("todos")}
                    className={` ${styles.botao_chat} ${styles.botao_todas_chat} ${
                      statusFiltro === "todos" ? "ativo" : ""
                    }`}
                  >
                    Todas
                  </button>
                  <button
                    onClick={() => setStatusFiltro("nao_lidas")}
                    className={`${styles.botao_chat} ${styles.botao_nao_lidas_chat} ${
                      statusFiltro === "nao_lidas" ? "ativo" : ""
                    }`}
                  >
                    Não lidas
                  </button>
                </div>
              </div>

              <div className={styles.lista_contatos_chat}>
                {contatosFiltrados.map((contato, index) => (
                  <div
                    key={contato.id}
                    className={`${styles.contato} ${
                      index === contatoSelecionado ? "selecionado" : ""
                    }`}
                    onClick={() => selecionarContato(index)}
                  >
                    <img src={contato.imagem} alt="" />
                    <div className={styles.contatos_info}>
                      <h3 className={styles.nome_contato_lista_contatos}>
                        {contato.nome}
                      </h3>
                      <p className={styles.mensagem_contato_lista_contatos}>
                        {contato.mensagemContato}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.divisao_chat}></div>

          <div className={styles.chat_mensagens}>
            <img
              className={styles.fundo_chat_mensagens}
              src={fundo_login_cadastro}
              alt=""
            />
            <div className={styles.nav_chat_mensagens}>
              {contatoSelecionado !== null && (
                <div className={styles.informacoes_contato_nav_chat}>
                  <img
                    src={contatos[contatoSelecionado].imagem}
                    alt=""
                    className={styles.contato_selecionado_icone}
                  />
                  <div className={styles.texto_contato .selecionado}>
                    <p className={styles.nome_contato_nav_chat}>
                      {contatos[contatoSelecionado].nome}
                    </p>
                    <span className={styles.status_contato_nav_chat}>
                      {contatos[contatoSelecionado].status}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.mensagens_chat}>
              {contatoSelecionado !== null &&
                mensagens.map((mens, indx) =>
                  mens.tipo === "data" ? (
                    <div key={indx} className={styles.separador_data}>
                      {mens.texto}
                    </div>
                  ) : (
                    <div
                      key={indx}
                      className={`${styles.mensagem} ${styles[mens.tipo]} ${
                        contatos[contatoSelecionado]?.isNotificacao
                          ? styles.notificacao_estilo
                          : ""
                      }`}
                    >
                      <p>{mens.texto}</p>
                      <span className={styles.hora_mensagem}>
                        {mens.hora_mensagem ?? ""}
                      </span>
                    </div>
                  )
                )}
            </div>

            {!contatoSelecionado?.isNotificacao && (
              <div className={styles.div_enviar_mensagem}>
                <div className={styles.elementos_enviar_mensagem}>
                  <i className={`${styles.icone_camera} fa-solid fa-camera`}></i>
                  <input
                    className={styles.input_enviar_mensagem}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    type="text"
                    placeholder={"Digite aqui a sua mensagem"}
                  />
                  <button
                    onClick={enviarMensagem}
                    className={styles.botao_enviar_mensagem}
                  >
                    <img src="src/assets/imagens/send.png" alt="" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default TelaChat;
