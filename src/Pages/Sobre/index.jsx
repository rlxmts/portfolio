import styled from "styled-components";

const Tecnologia = styled.h4`
  margin: 1rem 0;
  font-family: "PoppinsMedium";
  font-size: 1.2rem;
`;

const SecaoSobre = styled.section`

  .link-horbiti{
    color: #09B1D9;
    font-family: "PoppinsMedium";
  }

  h2{
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  h3{
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  li{
    font-size: .7rem;
  }
`;

const Sobre = ()=> {
  return(
    <SecaoSobre>
      <h2>Sobre:</h2>
      <p>#Opentowork</p>
      <p>Desenvolvedor Front-end com 4 anos de experiencia como Freelance na <a className="link-horbiti" href="https://horbiti.vercel.app" target="_blank" rel="noopener noreferrer">Horbiti</a>. A principio desenvolvia soluções em WordPress (Elementor PRO, CSS, HTML).</p>
      <p>Atualmente desenvolvo com foco em JavaScript.</p>

      <h3>Skills:</h3> 
      <ul>
        <Tecnologia>Front-end</Tecnologia>
        <li><strong className="strong">CSS - SASS</strong></li>
        <li><strong className="strong">HTML</strong></li>
        <li><strong className="strong">Bootstrap</strong></li>
        <li><strong className="strong">JavaScript</strong></li>
        <li><strong className="strong">React</strong></li>
        <li><strong className="strong">WordPress</strong></li>
        <li><strong className="strong">Consumo de APIS e Requisições: Axios, Fetch </strong></li>
        <Tecnologia>Back-end</Tecnologia>
        <li><strong className="strong">NodeJs</strong></li>
        <li><strong className="strong">Express</strong></li>
        <li><strong className="strong">PHP</strong></li>        
        <li><strong className="strong">APIS: RestFull</strong></li>      
        <li><strong className="strong">SQL: MySQL</strong></li>
        <li><strong className="strong">NoSQL: MongoDB</strong></li>
      </ul>
    </SecaoSobre>
  );
};

export default Sobre;