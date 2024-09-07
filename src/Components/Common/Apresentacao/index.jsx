import styled from "styled-components";

const Div = styled.div`
  margin: .5rem 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const Apresentacao = ()=> {
  return(
    <Div>
      <p>O que te impede de ser vencedor da sua história?​</p>
      <p>Desenvolvedor <strong className="strong">Front-end</strong>. Com um pezinho no Back. Freelance. Cursando <strong className="strong">Análise e Desenvolvimento de Sistemas.</strong></p>
    </Div>
  );
};

export default Apresentacao;