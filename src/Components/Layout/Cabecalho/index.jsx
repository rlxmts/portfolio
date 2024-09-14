import { BsMoonStars } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import Logo from "../../Common/Logo";
import styled from "styled-components";
import { useContext } from "react";
import { TemaContext } from "../../../Context/temaContext";

const Header = styled.header`
  display: flex; 
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;
  height: 70px;
  align-items: center;

  .icon-tema{
    cursor:pointer;
  }
`;

const Cabecalho = () => {
  const {trocaTema, tema} = useContext(TemaContext);
  return(
    <Header>
      <Logo />
      {tema === "light" ? 
        <BsMoonStars 
          size={15}  
          className="icon-tema"
          onClick={trocaTema}
        />
        :
        <IoSunnyOutline 
          size={20}  
          className="icon-tema"
          onClick={trocaTema}
        />   
      }
    </Header>
  );
};
export default Cabecalho;