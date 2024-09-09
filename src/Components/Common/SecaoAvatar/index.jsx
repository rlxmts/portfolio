import styled from "styled-components";
import fotoPerfil from "../../../assets/Imagens/foto-matheus.png";
import BotaoLinkedin from "../BotaoLinkedin";

const Imagem = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #000000;
  position: absolute;
  top: -80px;

  @media screen and (max-width: 600px){
    width: 100px;
    height: 100px;
    top: -50px;
  }
`;

const Div = styled.div`
  width: 100%;
  position: relative;
  height: 70px;
`;

const SecaoAvatar = ()=> {
  return(
    <Div>
      <Imagem src={fotoPerfil} />
      <BotaoLinkedin>Follow</BotaoLinkedin>
    </Div>
  );
};
export default SecaoAvatar;