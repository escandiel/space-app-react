import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 24px;
`;

const Imagem = styled.img`
  max-width: 212px;
  height: 158px;
  border-radius: 20px;
`;

const Botao = styled.button`
  width: 208px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--Degrad-com-rosa, #c98cf1);
  text-align: center;
  font-family: GandhiSansRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: white;
  background: transparent;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px 0 #c98cf1 inset, 0 0 16px 2px #c98cf1;
    border: 2px solid #c98cf1;
  }
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
        <Botao>Ver mais</Botao>
      </ColunaFotos>
    </section>
  );
};

export default Populares;
