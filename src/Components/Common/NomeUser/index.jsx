import { MdVerified } from "react-icons/md";
import styled from "styled-components";

const Div = styled.div`
  
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 1rem;
  h1{
    font-size: 2rem;
    font-family: "PoppinsMedium";
  }

`;

const NomeUser = ()=>{
  return(
    <Div>
      <h1>Matheus Cruz</h1>
      <MdVerified fill="#09b1d9"/>
    </Div>
  );
};

export default NomeUser;