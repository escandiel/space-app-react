import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

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

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <TagsContainer>
        <Tags />
      </TagsContainer>

      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ul>
            {fotos.map((foto) => (
              <Imagem key={foto.id} foto={foto} />
            ))}
          </ul>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
