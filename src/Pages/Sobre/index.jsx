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

  li{
    font-size: .7rem;
  }
`;

const Sobre = ()=> {
  return(
    <SecaoSobre>
      <TituloPagina>Sobre:</TituloPagina>
      <p className="opentowork">#Opentowork</p>
      <p>Desenvolvedor Front-end com 4 anos de experiencia como <strong className="strong">Freelance</strong> na <LinkExterno href="https://horbiti.vercel.app" target="_blank" rel="noopener noreferrer">Horbiti</LinkExterno>. A principio desenvolvia soluções em <strong className="strong">WordPress (Elementor PRO, CSS, HTML)</strong>.</p><br></br>
      <p>Há 1 ano meu foco está em desenvolvimento <strong className="strong">FullStack JavaScript</strong>, e estou em busca da minha primeira oportunidade no mercado de trabalho.</p>
      <p>Estou cursando <strong className="strong">Analise e Desenvovimento de Sistemas</strong> no Centro Universitário IBMR e vejo um Estágio com bons olhos.</p><br></br>
      <p> Quero construir uma carreira na área que me motiva a evoluir todos os dias. Programação é a única atividade capaz de me fazer estudar e me dedicar por tantas horas, durante tanto tempo. Foi a programação que me fez acreditar que é possível trabalhar com o que se ama e sentir prazer em se qualificar para alcançar voos maiores. </p>

      <TituloSecao>Skills:</TituloSecao> 
      <ul>
        <Tecnologia>Front-end</Tecnologia>
        <li><strong className="strong">CSS - SASS</strong></li>
        <li><strong className="strong">HTML</strong></li>
        <li><strong className="strong">Bootstrap</strong></li>
        <li><strong className="strong">JavaScript</strong></li>
        <li><strong className="strong">React</strong></li>
        <li><strong className="strong">WordPress</strong></li>
        <li><strong className="strong">Consumo de APIs e requisições: Axios, Fetch</strong></li>
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