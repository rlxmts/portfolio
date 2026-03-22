import styled from "styled-components";
import { LinkExterno } from "../../Components/Common/LinkExterno";
import { TituloPagina } from "../../Components/Common/TituloPagina";

const SecaoExperiencia = styled.section`
 .card-experiencia{
    border-bottom: 1px solid #dcdcdc;
    padding-bottom: 2em;
    margin-bottom: 2em;
 }
`
const Experiencias = () => {
  return(
    <SecaoExperiencia>

      <TituloPagina>Experiências:</TituloPagina>

      <div className="card-experiencia">
      <h3>Empresa:</h3>
      <p>Altimus - Grupo OLX (2024 - Atualmente).</p>
      <h3>Cargo:</h3>
      <p>Desenvolvedor Fullstack</p>
      <br></br>
      <h3>Descrição:</h3>
      <p>Na Altimus sou responsavel por todas as implantações de sites dos nosso parceiros. Hoje contamos com mais de 500 sites contratados e trabalho na melhoria e implementação de novas funcionalidades também! Além disso ajudo na resolução de problemas e erros fatais vindos do Suporte N2. Atuo na configuração de servidores WHM linux, na melhoria de desempenho e na segurança dos nossos sites wordpress. Minha responsabilidades abrangem tanto front quanto back e ja pude contribuir com muita coisa legal. Vamos conversar mais um pouco sobre isso? Me chame no <LinkExterno href="https://wa.me/5547996520334" target="_blank" rel="noreferrer noopener">WhatsApp</LinkExterno></p>
      </div>
      <br></br>

      <div className="card-experiencia">
        <h3>Empresa:</h3>
        <p>Horbiti (2020 - Atualmente).</p>
        <p>Horbiti é uma marca criada por mim focada na criação de sites e e-commerce.</p>
        <br></br>
        <h3>Cargo:</h3>
        <p>Freelance / Proprietário</p>
        <br></br>
        <h3>Descrição:</h3>
        <p>Criação de sites em WordPress, configuração de servidores linux, DNS, registro de domínios, migração e manutenção de websites. Atualmente desenvolvo projetos em WordPress, PHP, MySQL, JavaScript e React combinados com HTML, JSX, CSS, SASS e Styled-Components.</p>
      </div>
      <br></br>
      <h3>Site da Horbiti</h3>
      <LinkExterno href="https://horbiti.vercel.app" target="_blank" rel="noreferrer noopener">horbiti.vercel.app</LinkExterno>
    </SecaoExperiencia>
  ); 
};

export default Experiencias;