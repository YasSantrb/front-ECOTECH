import styles from "../styles/tela_sistema_de_pontos.module.css";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import Logo from "../assets/imagens/Logo.png";
import voucher_desconto from "../assets/imagens/promo-code.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import logo_amazon from "../assets/imagens/amazon_logo_icon_147320 1.png";
import logo_lg from "../assets/imagens/LG LOGO PNG 1.png";
import logo_pichau from "../assets/imagens/PICHAU ICON 1.png";
import logo_terabyte from "../assets/imagens/terabyte-shop 1.png";
import logo_mercado_livre from "../assets/imagens/Mercado Livre 2.png";
import logo_positivo from "../assets/imagens/POSITIVO ICON 1.png";
import fundo_cupom from "../assets/imagens/Vouchers 4.png";
import logo_lenovo from "../assets/imagens/Lenovo-Logo-PNG-File 1.png";
import icon_sucesso from "../assets/imagens/checked 2.png";
import PopUpSucesso from "../components/popUpSucesso";
import { useState } from "react";
import { Link } from "react-router-dom";

function TelaSistemaPontos() {
  const cuponsInfo = [
    {
      logo: logo_amazon,
      titulo: "Amazon",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-AMZ-2024-5K9L8",
    },
    {
      logo: logo_lg,
      titulo: "LG",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-LG-2025-9Y6S1",
    },
    {
      logo: logo_amazon,
      titulo: "Amazon",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-AMZ-2024-0M8N1",
    },
    {
      logo: logo_pichau,
      titulo: "Pichau",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-PCH-2025-7A4N3",
    },
    {
      logo: logo_terabyte,
      titulo: "Terabyte",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-TBY-2024-8D4R5",
    },
    {
      logo: logo_mercado_livre,
      titulo: "Mercado Livre",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-MLV-2025-9S3D9",
    },
    {
      logo: logo_positivo,
      titulo: "Positivo",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-POS-2024-7D5S4",
    },
    {
      logo: logo_mercado_livre,
      titulo: "Mercado Livre",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-MLV-2025-4L8D7",
    },
    {
      logo: logo_lenovo,
      titulo: "Lenovo",
      descricao: "10% off",
      preco: "P$ 9.99",
      codigo_cupom: "ECO-LNV-2024-2J4N3",
    },
  ];

  const [cupomSelecionado, setCupomSelecionado] = useState(null);
  const [isPopUpAberto, setIsPopUpAberto] = useState(false);

  function abrirCupomPopUp(cupom) {
    setCupomSelecionado(cupom);
    setIsPopUpAberto(true);
  }

  function fecharPopUp() {
    setCupomSelecionado(null);
    setIsPopUpAberto(false);
  }

  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  const copiarCodigo = async () => {
    try {
      await navigator.clipboard.writeText(cupomSelecionado.codigo_cupom);
      setMensagemSucesso(
        <span className={styles.span_popUpSucesso}>
          Código copiado com sucesso!{" "}
          <img className={styles.icone_sucesso} src={icon_sucesso} alt="" />
        </span>
      );

      setTimeout(() => {
        setMensagemSucesso(null);
      }, 2000);
    } catch (error) {
      console.log("Erro ao copiar código", error);
    }
  };

  return (
    <div className={styles.tela_sistema_pontos}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      <div className={styles.div_principal}>
        <div className={styles.sistema_pontos}>
          <nav className={styles.nav_sistemas_pontos}>
            <Link className={styles.link_voltar} to="/usuario/empresa">
              <img className={styles.icon_voltar} src={icon_voltar} alt="" />
              <p className={styles.nav_p}>VOLTAR</p>
            </Link>
            <div className={styles.qtd_pontos}>
              <p className={styles.quantidade}>P$ 99.99</p>
            </div>
          </nav>

          <div className={styles.info_sistema_pontos}>
            <div className={styles.logo_div}>
              <img className={styles.logo_ecotech} src={Logo} alt="" />
            </div>

            <div className={styles.cupons}>
              <div className={styles.botao_cupom}>
                <img
                  src={voucher_desconto}
                  className={styles.img_desconto}
                  alt=""
                />
                <div className={styles.pontos_info}>
                  <h3 className={styles.nome_cupom}>Cupons</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divisao}></div>

        <div className={styles.lado_cupons}>
          <div className={styles.div_img}>
            <img
              className={styles.fundo_cupons}
              src={fundo_login_cadastro}
              alt=""
            />
          </div>
          <div className={styles.cupons_desconto}>
            {cuponsInfo.map((cupom) => (
              <div
                className={styles.cupom}
                style={{ backgroundImage: `url(${fundo_cupom})` }}
              >
                <div className={styles.cupom_img_titulo}>
                  <img src={cupom.logo} className={styles.logo_cupom} alt="" />
                  <h3 className={styles.cupom_titulo}>{cupom.titulo}</h3>
                </div>
                <p className={styles.descricao_ponto}>{cupom.descricao}</p>
                <div className={styles.botao_desconto}>
                  <button
                    onClick={() => abrirCupomPopUp(cupom)}
                    className={styles.cupom_codigo}
                  >
                    {cupom.preco}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {isPopUpAberto && cupomSelecionado && (
            <div className={styles.popUpCupom}>
              <div className={styles.popUp}>
                <div className={styles.titulo_popUp}>
                  <p>Código do cupom</p>
                  <i
                    className={`${styles.botao_sair} fa-solid fa-x`}
                    onClick={fecharPopUp}
                  ></i>
                </div>
                <p className={styles.codigoCupom}>
                  {cupomSelecionado.codigo_cupom}
                </p>
                <div className={styles.botaoPopUp}>
                  <button onClick={copiarCodigo} className={styles.botaoCopiar}>
                    <i class="fa-solid fa-copy"></i>Copiar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TelaSistemaPontos;
