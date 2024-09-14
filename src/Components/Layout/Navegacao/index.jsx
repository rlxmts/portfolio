import { NavLink } from "react-router-dom";
import styled from "styled-components";
import classNames from "classnames";

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
    color: #737B82;
    cursor: pointer;
    padding: .5rem;
    border-bottom: 3px solid transparent;
  }

  .ativo{
    border-bottom: 3px solid #09b1d9;
  }
`;

const Navegacao = ()=> {
  const links = [
    {
      nome: "Projetos",
      url: "/"
    },
    {
      nome: "Sobre",
      url: "sobre"
    },
    {
      nome: "Experiências",
      url: "experiencias"
    }
  ];

  return(
    <Nav>
      <ListaNav>
        {links.map(item => {
          return(
            <li key={item.nome}>
              <NavLink 
                className={ ({isActive}) => classNames("nav-lista-link", isActive ? "ativo" : "") } 
                to={item.url} >
                {item.nome}
              </NavLink>
            </li> 
          );
        })}
      </ListaNav>
    </Nav>
  );
};

export default Navegacao;