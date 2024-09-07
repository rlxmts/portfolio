import Apresentacao from "../../Common/Apresentacao";
import { CapaPerfil } from "../../Common/CapaPerfil";
import { Container } from "../../Common/Container";
import NomeUser from "../../Common/NomeUser";
import SecaoAvatar from "../../Common/SecaoAvatar";

const Perfil = ()=> {
  return(
    <section>
      <CapaPerfil />
      <Container>
        <SecaoAvatar />
        <NomeUser />
        <Apresentacao />
      </Container>
    </section>
  );
};

export default Perfil;