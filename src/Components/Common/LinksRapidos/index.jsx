import { FaGithub } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styled from "styled-components";

const ListaLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  row-gap: 5px;

  a{
    color: #495057;
    font-family: "PoppinsMedium";
    display: flex;
    align-items: center;
    gap: 2px;
  }

  li:first-child a{
    color: #44b678;
  }
`;

const LinksRapidos = () => {
  return(
    <ListaLinks>
      <li>
        <a href="#"><HiOutlineBriefcase size="20" />Disponível </a>
      </li>
      <li>
        <a href="tel:+5521991537608" target="_blank" rel="noopener noreferrer"><MdOutlinePhone size="17" />(21) 99153-7608 </a>
      </li>
      <li>
        <a href="https://github.com/rlxmts" target="_blank" rel="noopener noreferrer"> <FaGithub size="17" /> GitHub</a>
      </li>
      <li>
        <a href="mailto:matheusw3314@gmail.com" target="_blank" rel="noopener noreferrer"> <MdOutlineAlternateEmail size="20" /> E-mail</a>
      </li>
    </ListaLinks>
  );
};

export default LinksRapidos;