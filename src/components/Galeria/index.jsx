import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 4em 0;
`;

const Galeria = () => {
  return (
    <>
      <TagsContainer>
        <Tags />
      </TagsContainer>

      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
