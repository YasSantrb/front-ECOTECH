import chat from "../assets/imagens/icon_chat.png"; 
import { Link } from "react-router-dom";

function InformacoesDoacaoComponente({ nomeDoador, especificacoes, nomeEletronico, infoProduto, condicao, observacao, imagem }) {
    return (
        <div className="info_doacao_container">
            <div className="container_header_icons">
                <Link to="/chat" className="icon_button chat_button">
                    <img src={chat} alt="Chat" />
                </Link>
            </div>

            <div className="info_doacao_content_wrapper">
                <div className="info_doacao_left_side">
                    <img className="doacao_main_img" src={imagem} alt={nomeEletronico} />
                    <span className="tag_disponibilidade">Disponível!</span> 
                    <div className="doador_info_block">
                        <i className="fa-solid fa-user doador_icon"></i> 
                        <h3>Doador:</h3>
                        <p>{nomeDoador}</p>
                    </div>
                    <div className="especificacoes_block">
                        <i className="fa-solid fa-file-lines especificacoes_icon"></i> 
                        <div className="especificacoes_content">
                            <h3>Especificações:</h3>
                        <p className="especificacoes_p">{especificacoes}</p>
                        </div>
                    </div>
                </div>

                <div className="info_doacao_right_side">
                    <h1>{nomeEletronico}</h1> 
                    
                    <div className="info_section">
                        <h3>Informações sobre o produto:</h3>
                        <p>{infoProduto}</p>
                    </div>

                    <div className="info_section">
                        <h3>Condição:</h3>
                        <p>{condicao}</p>
                    </div>

                    <div className="info_section">
                        <h3>Observação:</h3>
                        <p>{observacao}</p>
                    </div>

                    <div className="botao_agendar_div">
                        <button className="botao_agendar_coleta">Agendar coleta!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformacoesDoacaoComponente;