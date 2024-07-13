import axios from "axios";

function useCepService() {
  const api = axios.create({
    baseURL: "https://brasilapi.com.br/api/cep/v1/"
  });

  async function getCep(cep) {
    try {
      return await api.get(`${cep}`);
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      throw error; // Re-lançar o erro para ser tratado no componente
    }
  }

  return { getCep };
}

export default useCepService;
