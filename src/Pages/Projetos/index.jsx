import styled from "styled-components";
import FotoPerfil from "../../Components/Common/FotoPerfil";
import fotoClima from "../../assets/Imagens/clima.jpg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

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
    background-image: url(${fotoClima});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

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
  return(
    <SecaoProjetos>
      <div className="card">
        <div className="nome">
          <FotoPerfil />
          <h4>rlxmts</h4>
        </div>
        <div  className="imagem"></div>
        <div className="icons">
          <MdOutlineRemoveRedEye size={25} />
          <FaGithub size={20} />
        </div>
        <div>
          <span> App de Precisão do tempo. 🌡️</span>
        </div>
      </div>
    </SecaoProjetos>
  );
};

export default Projetos;