import styled from "styled-components";
import { TituloPagina } from "../../Components/Common/TituloPagina";
import { TituloSecao } from "../../Components/Common/TituloSecao";
import { LinkExterno } from "../../Components/Common/LinkExterno";

const Tecnologia = styled.h4`
  margin: 1rem 0;
  font-family: "PoppinsMedium";
  font-size: 1.2rem;
`;

const SecaoSobre = styled.section`

  .opentowork{
    color: #44b678;
    font-family: "PoppinsMedium";
  }
    .lista-disc {
      padding-left: 20px;
    }
`;

const Sobre = ()=> {
  return(
    <SecaoSobre>
      <p className="opentowork">#Employed</p>
      <p>Sou movido por desafios e apaixonado por gerar resultados! Com 4 anos de experiência em desenvolvimento web, fundei a <LinkExterno href="https://horbiti.com.br" target="_blank" rel="noopener noreferrer">Horbiti</LinkExterno> em 2020, onde atuei com foco em <strong className="strong">Front-end</strong> e construção de soluções criativas para diferentes clientes.</p><br></br>
      <p>Atualmente, encaro um novo desafio como <strong className="strong">Desenvolvedor Fullstack</strong> na <strong className="strong">Altimus</strong>, um produto da OLX, onde estou comprometido em trazer impacto real aos projetos.</p><br></br>
      <p>Responsável por:</p>
      <ul className="lista-disc">
        <li className="strong">Redução de 40% do tempo de conclusão das implantações;</li>
        <li className="strong">Implantação de mais de 150 sites;</li>
        <li className="strong">Melhorias e implementações de funcionalidades nos temas e plugins do Altimus, impactando centenas de sites;</li>
        <li className="strong">Resolução de bugs, erros e demandas do suporte N2;</li>
        <li className="strong">Melhorias contínuas no desempenho e na segurança dos sites WordPress.</li>
      </ul><br></br>
      <p>Meu objetivo é seguir entregando resultados de alto nível, aprendendo continuamente e criando soluções que façam a diferença.</p><br></br>
      <p>Sou apaixonado em resolver problemas! Vamos pra cima 👊🏾😁</p>


      <TituloSecao>Skills:</TituloSecao> 
      <ul>
        <Tecnologia>Front-end</Tecnologia>
        <li><strong className="strong">CSS - SASS</strong></li>
        <li><strong className="strong">HTML</strong></li>
        <li><strong className="strong">Bootstrap</strong></li>
        <li><strong className="strong">JavaScript</strong></li>
        <li><strong className="strong">React</strong></li>
        <li><strong className="strong">WordPress</strong></li>
        <li><strong className="strong">Tailwind</strong></li>
        <li><strong className="strong">API's</strong></li>
        <Tecnologia>Back-end</Tecnologia>
        <li><strong className="strong">Node.js</strong></li>
        <li><strong className="strong">Express</strong></li>
        <li><strong className="strong">PHP</strong></li>
        <li><strong className="strong">APIs: RESTful</strong></li>
        <li><strong className="strong">SQL: MySQL</strong></li>
        <li><strong className="strong">NoSQL: MongoDB</strong></li>

      </ul>
    </SecaoSobre>
  );
};

export default Sobre;