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
    padding: 1rem;
    margin-bottom: 7rem;
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
  .texto{
    font-size: 13px;
    margin-top: 5px;
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
    margin-bottom: 5px;
    border: none;
    width: 100%;
    display: block;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    font-family: "PoppinsMedium";
    background-color: transparent;
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
    gap: 30px;
  }

  .icons-link{
    color: #000000;
    display: flex;
    align-items: center;
    gap: 3px;
    
    span{
      font-family: "PoppinsMedium";
    }
  }

  .lista-tags{
    display: flex; 
    flex-wrap: wrap;
    gap: 5px;

    .tag{
      background-color: #022f3a;
      font-size: 10px;
      font-family: "PoppinsMedium";
      padding: 3px 15px;
      color: #FFFFFF;
      border-radius: 5px;
      margin-bottom: 5px;
    }
  }
`;

const Projetos = () => {

  const {projetos, carregando, erro} = useBuscaProjetos();
  const [textHidde, setTextHidde] = useState([]);

  if(carregando) return <span className="carregando"></span>;

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
          <article className="card" key={item._id}>
            <header className="nome">
              <FotoPerfil />
              <h2>{item.titulo}</h2>
            </header>
  
            <section>
              <p className={textHidde.includes(item._id) ? "texto" : "textoHidde texto"}>
                {item.texto}
              </p>
              <button className="ver-mais" onClick={() => abrirOuFecharTexto(item._id)}>
                {textHidde.includes(item._id) ? "Ver menos" : "Ver mais"}
              </button>
            </section>
  
            <figure className="imagem">
              <img src={item.imagem} alt={`Imagem do projeto ${item.titulo}`} />
              <div>
                <ul className="lista-tags">
                  {item.tags.map(tag => {
                    return(
                      <li className="tag" key={tag}>{tag}</li>
                    );
                  })}
                </ul>
              </div>
              <figcaption className="icons">
                <a className="icons-link" href={item.deploy} target="_blank" rel="noopener noreferrer">
                  <MdOutlineRemoveRedEye size={25} /><span>Deploy</span>
                </a>
                <a className="icons-link" href={item.repositorio} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} /><span>Repositório</span>
                </a>
              </figcaption>
            </figure>
          </article>

        );
      })}
    </SecaoProjetos>
  );
};

export default Projetos;