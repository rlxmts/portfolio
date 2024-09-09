import styled from "styled-components";
import foto from "../../../assets/Imagens/foto-matheus.png";

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const FotoPerfil = () => {
  return(
    <Img src={foto} alt="Matheus" />
  );
};

export default FotoPerfil;