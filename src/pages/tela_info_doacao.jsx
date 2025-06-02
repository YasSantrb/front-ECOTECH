import { useState, useEffect } from "react";
import styles from "../styles/tela_info_doacao.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { Link, useParams } from "react-router-dom";
import InformacoesDoacaoComponente from "../components/detalhes_doacoes";
import televisao from "../assets/imagens/download 1 (1).png"; 
import placa_mae from "../assets/imagens/download 3.png";
import tablet from "../assets/imagens/OIP 8.png";
import computador_antigo from "../assets/imagens/OIP 12.png";

const todasAsDoacoes = [
    {
        id: "1",
        nomeDoador: "Ana Clara Lima",
        especificacoes: "Tela de 29 polegadas, som estéreo, entrada AV.", 
        nomeEletronico: "Televisão de tubo",
        infoProduto: "TV de tubo clássica em bom estado. Ideal para quem busca um toque vintage ou para uso em projetos de reaproveitamento de peças.",
        condicao: "Usado",
        observacao: "Pode ser reutilizado ou ter partes aproveitadas.",
        imagem: televisao, 
    },
    {
        id: "2",
        nomeDoador: "Pedro Souza Costa",
        especificacoes: "Socket AM4, chipset B450, 4 slots RAM DDR4.", 
        nomeEletronico: "Placa-mãe ASUS",
        infoProduto: "Placa-mãe ASUS usada, mas em ótimo estado. Perfeita para montar um PC de entrada ou para substituir uma peça danificada.",
        condicao: "Para peças.",
        observacao: "Ideal para reaproveitamento de peças.",
        imagem: placa_mae, 
    },
    {
        id: "3",
        nomeDoador: "Carla Pires",
        especificacoes: "Tela de 10.1 polegadas, 32GB de armazenamento, Wi-Fi e Bluetooth.",
        nomeEletronico: "Tablet Samsung",
        infoProduto: "Tablet Samsung em bom estado de conservação, ideal para navegar na internet, assistir vídeos e estudar. Perfeito para uso diário.",
        condicao: "Novo",
        observacao: "Produto novo, mas quebrado.",
        imagem: tablet, 
    },
    {
        id: "4", 
        nomeDoador: "Mariana Oliveira",
        especificacoes: "Processador Pentium III, 256MB RAM, HD 40GB.", 
        nomeEletronico: "Computador antigo",
        infoProduto: "Computador de mesa antigo, funcional, ideal para projetos retro gaming, peças de reposição ou para colecionadores. Sistema operacional não incluso.",
        condicao: "Usado",
        observacao: "Pode ser reutilizado ou ter partes aproveitadas.",
        imagem: computador_antigo, 
    },
    {
        id: "5", 
        nomeDoador: "Rafael Mendes",
        especificacoes: "Tela de 21 polegadas, entrada coaxial, mono áudio.", 
        nomeEletronico: "Televisão de tubo",
        infoProduto: "Outra TV de tubo, menor e mais compacta. Boa para ambientes pequenos ou para quem quer desfrutar de jogos clássicos. Requer conversor para canais digitais.",
        condicao: "Usado",
        observacao: "Pode ser reutilizado ou ter partes aproveitadas.",
        imagem: televisao, 
    },
    {
        id: "6", 
        nomeDoador: "Fernanda Costa",
        especificacoes: "Tela de 8 polegadas, 16GB de armazenamento, câmera frontal e traseira.", 
        nomeEletronico: "Tablet Samsung",
        infoProduto: "Tablet Samsung compacto, ideal para crianças ou para quem busca um dispositivo leve para leitura e redes sociais. Ótimo custo-benefício.",
        condicao: "Novo",
        observacao: "Produto novo, mas já está quebrado.",
        imagem: tablet, 
    }
];

function TelaInfoDoacao() {
  const { id } = useParams(); 
  const [doacaoAtual, setDoacaoAtual] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const buscarDetalhesDoacao = async () => {
      setLoading(true); 

      try {    
      const doacaoEncontrada = todasAsDoacoes.find(doacao => doacao.id === id);
        if (doacaoEncontrada) {
          setDoacaoAtual(doacaoEncontrada);
        } else {
          setDoacaoAtual(null);
        }
      } catch (erro) {
        setDoacaoAtual(null);
        console.error("Erro na busca de doação:", erro); 
      } finally {
        setLoading(false); 
      }
    };
    if (id) { 
      buscarDetalhesDoacao();
    } else {
      setLoading(false); 
      setDoacaoAtual(null); 
    }
  }, [id]);

  if (loading) {
    return <p className={styles.mensagem_carregando}>Carregando detalhes da doação...</p>;
  }

  if (!doacaoAtual) {
    return <p className={styles.mensagem_nenhuma_doacao}>Nenhuma doação selecionada ou encontrada.</p>;
  }

  return (
    <div className={styles.tela_info_doacao}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_info_doacao}
      />
      <div className={styles.info_doacao_div}>
        <nav className={styles.nav_info_doacao}>
          <Link className={styles.link_voltar_info_doacao} to="/">
            <img className={styles.icon_voltar_info_doacao} src={icon_voltar} alt="Voltar" />
            <p className={styles.nav_info_doacao_p}>VOLTAR</p>
          </Link>
        </nav>

        <main className={styles.info_doacao_main}>
          <InformacoesDoacaoComponente
            nomeDoador={doacaoAtual.nomeDoador}
            especificacoes={doacaoAtual.especificacoes}
            nomeEletronico={doacaoAtual.nomeEletronico}
            infoProduto={doacaoAtual.infoProduto}
            condicao={doacaoAtual.condicao}
            observacao={doacaoAtual.observacao}
            imagem={doacaoAtual.imagem}
          />
        </main>
      </div>
    </div>
  );
}

export default TelaInfoDoacao;