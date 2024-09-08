import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = styled.footer`
  text-align:  center;
  padding: 2rem 0;
`; 

const ListaFooter = styled.ul`
  display: flex;
  gap: 10px;
  align-items:center;
  justify-content: center;

  a{
    color: #495057;

    &:hover{
      color: #09B1D9;
    }
  }
`;

const Rodape = ()=> {
  return(
    <Footer>
      <ListaFooter>
        <li>
          <a href="https://wa.me/5521991537608"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="esconder">
              WhatsApp
            </span>
            <FaWhatsapp size={20} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/matheusw16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="esconder">
              Linkedin
            </span>
            <FaLinkedinIn size={20} />
          </a>
        </li>
        <li>
          <a href="https://github.com/rlxmts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="esconder">
              Github
            </span>
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/rlxmts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="esconder">
              Instagram
            </span>
            <FaInstagram size={20} />
          </a>
        </li>
      </ListaFooter>
      <span>M Cruz &copy; 2024.</span>
    </Footer>
  );
};

export default Rodape;