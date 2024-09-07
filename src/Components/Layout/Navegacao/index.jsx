import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 2rem 0;
`;

const ListaNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  
  .lista-nav-item{
    font-family: "PoppinsBold";
    color: #495057;
    cursor: pointer;
  }
`;

const Navegacao = ()=> {
  return(
    <Nav>
      <ListaNav>
        <li className="lista-nav-item"><Link to='/' />Projetos</li>
        <li className="lista-nav-item"><Link to='/sobre' />Sobre</li>
        <li className="lista-nav-item"><Link to='/experiencias' />Experiências</li>
      </ListaNav>
    </Nav>
  );
};

export default Navegacao;