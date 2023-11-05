import styled from "styled-components";
import CampoDeTexto from "../CampoDeTexto";

const CabecalhoEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = () => {
  return (
    <CabecalhoEstilizado>
      <img src="/space-app.svg" />
      <CampoDeTexto placeholder="O que voce procura?" />
    </CabecalhoEstilizado>
  );
};

export default Cabecalho;
