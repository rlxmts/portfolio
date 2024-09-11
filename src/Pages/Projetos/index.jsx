import styled from "styled-components";
import FotoPerfil from "../../Components/Common/FotoPerfil";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { useBuscaProjetos } from "../../Hooks/useBuscaProjetos";

const SecaoProjetos = styled.section`

  .card{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
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

  .imagem{
    display: block;
    height: 300px;
    width: 100%;

    img{
      width: 100%;
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

  if(carregando)return <p>Carregando...</p>;

  if(erro) return <p>{erro}</p>;

  return(
    <SecaoProjetos>
      {projetos.map(item => {
        return(
          <div className="card" key={item._id}>
            <div className="nome">
              <FotoPerfil />
              <h4>rlxmts</h4>
            </div>
            <div  className="imagem">
              <img src={item.imagem} alt={item.titulo}/>
            </div>
            <div className="icons">
              <a href="#"><MdOutlineRemoveRedEye size={25} /></a>
              <a href="#"><FaGithub size={20} /></a>        
            </div>
            <div>
              <span> {item.titulo}</span>
              <p>{item.texto}</p>
            </div>
          </div>
        );
      })}
    </SecaoProjetos>
  );
};

export default Projetos;