import styled from "styled-components";
import FotoPerfil from "../../Components/Common/FotoPerfil";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { useBuscaProjetos } from "../../Hooks/useBuscaProjetos";
import { useState } from "react";

const SecaoProjetos = styled.section`

  .card{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
    margin-bottom: 5rem;
  }

  .nome{
    display:flex;
    align-items: center;
    gap: 5px;

    span{
      font-family: "PoppinsMedium";
      font-size: .8rem  ;
    }
  }

  .textoHidde{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis; 
    line-height: 1.2rem;
  }

  .ver-mais{
    cursor: pointer;
    font-family: "PoppinsMedium";
    text-align: center;
    display: block;
    width: 100%;
    font-size: 12px;
  }

  .titulo{
    font-family: "PoppinsMedium";
  }

  .imagem{
    display: block;
    height: 300px;
    width: 100%;

    img{
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 500px){
      height: 200px;
    }
  }

  .icons{
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Projetos = () => {

  const {projetos, carregando, erro} = useBuscaProjetos();
  const [textHidde, setTextHidde] = useState([]);

  if(carregando)return <p>Carregando...</p>;

  if(erro) return <p>{erro}</p>;

  const abrirOuFecharTexto = (id) => {
    setTextHidde((prevState) => {
      if (prevState?.includes(id)) {
        return prevState.filter((item) => item !== id);
      } else {
        return [...(prevState || []), id];
      }
    });
    console.log(textHidde);
  };

  return(
    <SecaoProjetos>
      {projetos.map(item => {
        return(
          <div className="card" key={item._id}>
            <div className="nome">
              <FotoPerfil />
              <h4>rlxmts</h4>
            </div>
            <div>
              <span className="titulo"> {item.titulo}</span>
              <p className={textHidde.includes(item._id) ? "" : "textoHidde"}>{item.texto}</p>
              <span className="ver-mais" onClick={()=> abrirOuFecharTexto(item._id) } >{textHidde.includes(item._id) ? "ver menos" : "Ver mais"}</span>
            </div>
            <div  className="imagem">
              <img src={item.imagem} alt={item.titulo}/>
              <div className="icons">
                <a href={item.deploy} target="_blank" rel="noopener noreferrer"><MdOutlineRemoveRedEye size={25} /></a>
                <a href={item.repositorio} target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>        
              </div>
            </div>
          </div>
        );
      })}
    </SecaoProjetos>
  );
};

export default Projetos;