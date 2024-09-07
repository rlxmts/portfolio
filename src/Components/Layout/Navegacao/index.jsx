import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 2rem 0;
`;

const ListaNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  .nav-lista-link{
    display : block ;
    font-family: "PoppinsBold";
    color: #495057;
    cursor: pointer;
    padding: .5rem;
  }

  .ativo{
    border-bottom: 3px solid #09b1d9;
  }
`;

const Navegacao = ()=> {
  return(
    <Nav>
      <ListaNav>
        <li className="ativo"><Link className="nav-lista-link" to="/" >Projetos</Link></li>
        <li><Link className="nav-lista-link" to="/sobre" >Sobre</Link></li>
        <li><Link className="nav-lista-link" to='/experiencias' >Experiências</Link></li>
      </ListaNav>
    </Nav>
  );
};

export default Navegacao;