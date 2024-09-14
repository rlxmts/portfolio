import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "../Components/Layout/Cabecalho";
import styled from "styled-components";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import EstiloGlobal from "../assets/EstiloGlobal";
import Perfil from "../Components/Layout/Perfil";
import Navegacao from "../Components/Layout/Navegacao";
import { Container } from "../Components/Common/Container";
import Rodape from "../Components/Layout/Rodape";
import Sobre from "./Sobre";
import Experiencias from "./Experiencia";
import Projetos from "./Projetos";
import { TemaContext, TemaProvider } from "../Context/temaContext";
import { useContext } from "react";
import { temaClaro, temaEscuro } from "../assets/EstiloGlobal/tema";

const AppContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const App = ()=> {
  return(
    <TemaProvider>
      <AppRotas />
    </TemaProvider>
  );
};

const AppRotas = ()=>{

  const {tema} = useContext(TemaContext);

  return(
    <StyledThemeProvider theme={ tema === "light" ? temaClaro : temaEscuro}>
      <EstiloGlobal />
      <BrowserRouter>
        <Cabecalho />
        <AppContainer>
          <Perfil />
          <Container>
            <Navegacao />
            <Routes>
              <Route path="/" element={ <Projetos /> } />
              <Route path="/sobre" element={ <Sobre /> } />
              <Route path="/experiencias" element={ <Experiencias /> } />
            </Routes>
            <Rodape />
          </Container>
        </AppContainer>
      </BrowserRouter>
    
    </StyledThemeProvider>
  );
};

export default App;