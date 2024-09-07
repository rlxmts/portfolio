import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "../Components/Layout/Cabecalho";
import Home from "./Home";
import styled from "styled-components";
import Perfil from "../Components/Layout/Perfil";
import Navegacao from "../Components/Layout/Navegacao";
import { Container } from "../Components/Common/Container";

const AppContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const AppRotas = ()=>{
  return(
    <BrowserRouter>
      <Cabecalho />
      <AppContainer>
        <Perfil />
        <Container>
          <Navegacao />
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </Container>
      </AppContainer>
    </BrowserRouter>
  );
};

export default AppRotas;