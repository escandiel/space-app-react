import styled from "styled-components";
import tags from "./tags.json";

const TituloTag = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 219px;
  color: #d9d9d9;
`;

const BotaoTag = styled.button`
  box-sizing: border-box;
  border: 1px solid transparent;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4); /* Efeito de sombra */
  padding: 0 18px;
  margin: 0;
  max-height: 49px;
  border-radius: 10px;
  border: none;
  background: rgba(217, 217, 217, 0.3);
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  transition: 0.4s ease-in-out; /* Adicionando uma transição suave */

  &:hover {
    border: 1px solid var(--Degrad-com-rosa, #c98cf1);
    transition: 1s ease-out;
    cursor: pointer;
  }
`;

const Tags = () => {
  return (
    <>
      <TituloTag>Busque por tags:</TituloTag>
      {tags.map((tag) => (
        <BotaoTag key={tag.id}>{tag.titulo}</BotaoTag>
      ))}
    </>
  );
};

export default Tags;
