import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";

const Link = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  border: none;
  background-color: #09b1d9;
  padding: .5rem 1rem;
  color: #FFFFFF;
  font-family: "PoppinsMedium";
  border-radius: 20px;
  letter-spacing: 0;
  margin: 1rem 0;
  cursor: pointer;
  text-align: center;
  position: absolute;
  right: 0;

  .icon-linkedin{
    border-left: 1px solid #ffffff7b;
    padding-left: .5rem;
  }
`;

// eslint-disable-next-line react/prop-types
const BotaoLinkedin = ({children})=> {
  return(
    <Link 
      href="https://linkedin.com/in/matheusw16"
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
      <FaLinkedinIn size={20} className="icon-linkedin" />
    </Link>
  );
};

export default BotaoLinkedin;