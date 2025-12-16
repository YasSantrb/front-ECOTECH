import { useEffect, useState } from "react";
import api from "../../services/api";

const useGetTodasDoacoes = () => {
    const [doacoes, setDoacoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoacoes = async () => {
            setLoading(true);
            setError(null); 

            try {
                const response = await api.get("todas_doacoes/");
                const data = response.data; 

                if (response.status === 200) {
                    if (data && Array.isArray(data)) {
                        setDoacoes(data);
                    } else {
                        if (data && data.results && Array.isArray(data.results)) {
                            setDoacoes(data.results);
                        } else {
                            setDoacoes([]);
                        }
                    }
                } else { 
                     console.error("Resposta com status inesperado:", response.status);
                     setError(`Erro na requisição: Status ${response.status}`);
                     setDoacoes([]);
                }
            } catch (erro) {
                console.error("Erro ao buscar doações:", erro);
                setDoacoes([]);
                const errorMessage = erro.response
                    ? `Falha (${erro.response.status}): ${erro.response.statusText}. ` 
                    : "Erro de rede ou timeout.";
                if (erro.response?.status === 500) {
                    setError(errorMessage + " O servidor retornou um Erro Interno. Verifique os logs do backend.");
                } else {
                    setError(errorMessage);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchDoacoes();
    }, []); 
    return { doacoes, loading, error };
};

export default useGetTodasDoacoes;