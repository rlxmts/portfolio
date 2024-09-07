import styled from "styled-components";
import imgLogo from "../../../assets/Imagens/logo-preto.png";

const LogoImg = styled.img`
  width: 100px;
`;

const Logo = () => {
  return(
    <LogoImg src={imgLogo} alt="Logo Dev Matheus" />
  );
};

export default Logo;