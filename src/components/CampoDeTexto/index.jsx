import styled from "styled-components";
import search from "/search.svg";
import { useState } from "react";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoDeTextoPersonalizado = styled.input`
  width: 602px;
  height: 46px;
  color: white;
  font-size: 24px;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid #c98cf1;
  padding: 12px 16px;

  &::placeholder {
    font-size: 24px;
    color: white;
  }
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 14px;
  right: 30px;
  height: 38px;
  width: 38px;
`;

const CampoDeTexto = ({ placeholder }) => {
  const [valorInput, setValorInput] = useState("");

  const handleInputChange = (evento) => {
    setValorInput(evento.target.value);
  };

  return (
    <ContainerEstilizado>
      <CampoDeTextoPersonalizado
        value={valorInput}
        onChange={handleInputChange}
        placeholder={valorInput ? "" : placeholder}
      />
      <IconeLupa src={search} />
    </ContainerEstilizado>
  );
};

export default CampoDeTexto;
