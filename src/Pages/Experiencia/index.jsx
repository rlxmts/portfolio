import { LinkExterno } from "../../Components/Common/LinkExterno";
import { TituloPagina } from "../../Components/Common/TituloPagina";

const Experiencias = () => {
  return(
    <section>

      <TituloPagina>Experiências:</TituloPagina>

      <h3>Empresa:</h3>
      <p>Horbiti - 2020 - Atualmente.</p>
      <p>Horbiti é uma marca criada por mim focada na criação de sites e e-commerce.</p>
      <br></br>
      <h3>Cargo:</h3>
      <p>Freelance / Proprietário</p>
      <br></br>
      <h3>Descrição:</h3>
      <p>Criação de sites em WordPress, configuração de servidores linux, DNS, registro de domínios, migração e manutenção de websites. Atualmente desenvolvo projetos em WordPress, PHP, MySQL, JavaScript e React combinados com HTML, JSX, CSS, SASS e Styled-Components.</p>
      <br></br>
      <h3>Site da Horbiti</h3>
      <LinkExterno href="https://horbiti.vercel.app" target="_blank" rel="noreferrer noopener">horbiti.vercel.app</LinkExterno>
    </section>
  ); 
};

export default Experiencias;