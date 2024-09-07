import { BsMoonStars } from "react-icons/bs";
import Logo from "../../Common/Logo";
import styled from "styled-components";

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
  return(
    <Header>
      <Logo />
      <BsMoonStars className="icon-tema"/>
    </Header>
  );
};
export default Cabecalho;