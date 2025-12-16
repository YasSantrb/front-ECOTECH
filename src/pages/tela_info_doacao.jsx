import { useState, useEffect } from "react";
import styles from "../styles/tela_info_doacao.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom"; 
import InformacoesDoacaoComponente from "../components/detalhes_doacoes";
import useGetTodasDoacoes from "../hooks/doacoes/useGetTodasDoacoes";
import icon_user from "../assets/imagens/icon_user.png";

function TelaInfoDoacao() {
  const { id } = useParams(); 
  const [doacaoAtual, setDoacaoAtual] = useState(null);
  const { doacoes: todasAsDoacoesAPI, loading: loadingAPI, error: errorAPI } = useGetTodasDoacoes();
  
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
 

  useEffect(() => {
    const doacoesLista = todasAsDoacoesAPI || [];
    if (loadingAPI) {
      setLoading(true);
      return;
    }
    if (id) {
      const doacaoEncontrada = doacoesLista.find(
        (doacao) => String(doacao.id) === id 
      );

      if (doacaoEncontrada) {
        setDoacaoAtual({
            id: doacaoEncontrada.id,
            nome_doador: doacaoEncontrada.nome_doador || "Doador não informado",
            especificacoes: doacaoEncontrada.especificacao, 
            nome_doacao: doacaoEncontrada.nome_doacao,
            descricao_geral: doacaoEncontrada.descricao_geral,
            condicao: doacaoEncontrada.condicao,
            observacao: doacaoEncontrada.observacao,
            endereco: doacaoEncontrada.endereco,
            imagem_user: doacaoEncontrada.imagem_doador || icon_user,
            fotos_eletronico: doacaoEncontrada.fotos_eletronico, 
            status: doacaoEncontrada.status || "Pendente", 
        });
      } else {
        setDoacaoAtual(null);
      }
    } else {
      setDoacaoAtual(null);
    }
    setLoading(false); 
  }, [todasAsDoacoesAPI, id, loadingAPI]); 

  if (loading || loadingAPI) {
    return (
      <p className={styles.mensagem_carregando}>
        Carregando detalhes da doação...
      </p>
    );
  }
  
  if (errorAPI) {
    return (
      <p className={styles.mensagem_nenhuma_doacao}>
        Erro ao buscar doações: {errorAPI.message}
      </p>
    );
  }

  if (!doacaoAtual) {
    return (
      <p className={styles.mensagem_nenhuma_doacao}>
        Nenhuma doação selecionada ou encontrada.
      </p>
    );
  }
  const modo = location.state?.modo || "visualizacao";

  return (
    <div className={styles.tela_info_doacao}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_info_doacao}
      />
      <div className={styles.info_doacao_div}>
        <nav className={styles.nav_info_doacao}>
          <button className={styles.link_voltar_info_doacao} onClick={() => navigate(-1)}>
            <img
              className={styles.icon_voltar_info_doacao}
              src={icon_voltar}
              alt="Voltar"
            />
            <p className={styles.nav_info_doacao_p}>VOLTAR</p>
          </button>
        </nav>
        <main className={styles.info_doacao_main}>
          <InformacoesDoacaoComponente
            nomeDoador={doacaoAtual.nomeDoador}
            especificacoes={doacaoAtual.especificacoes}
            nome_doacao={doacaoAtual.nome_doacao}
            descricao_geral={doacaoAtual.descricao_geral}
            condicao={doacaoAtual.condicao}
            observacao={doacaoAtual.observacao}
            endereco={doacaoAtual.endereco}
            imagem_user={doacaoAtual.imagem_user}
            fotos_eletronico={doacaoAtual.fotos_eletronico}
            modo={modo}
            status={doacaoAtual.status}
            onEditarDoacao={(novaDoacao) => setDoacaoAtual(novaDoacao)}
          />
        </main>
      </div>
    </div>
  );
}

export default TelaInfoDoacao;