import styled from "styled-components";
import logoPreta from "../../../assets/Imagens/logo-preto.png";
import logoBranca from "../../../assets/Imagens/logo-branco.png";
import { useContext } from "react";
import { TemaContext } from "../../../Context/temaContext";

const LogoImg = styled.img`
  width: 100px;
`;

const Logo = () => {

  const {tema} = useContext(TemaContext);

  return(
    <>
      {tema === "light" ? <LogoImg src={logoPreta} alt="Logo Dev Matheus" /> : <LogoImg src={logoBranca} alt="Logo Dev Matheus" />}
    </>
  );
};

export default Logo;