import axios from "axios";
import { useEffect, useState } from "react";

export const useBuscaProjetos = () => {

  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(()=> {

    const buscaApi = async () => {

      try{
        setCarregando(true);
        const projetosDaApi = await axios.get("https://api-portfolio-rose.vercel.app/projetos");
        setProjetos(projetosDaApi.data.Posts);
      }catch(erro){
        setCarregando(false);
        setErro(`Ops parece que houve um erro ao carregar os projetos: ${erro}`);
      }finally{
        setCarregando(false);
      }
    };

    buscaApi();
  }, []);

  return {
    erro,
    carregando,
    projetos
  };
};