import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineExpandAlt,
} from "react-icons/ai";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { useState } from "react";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
      font-weight: 300;
      font-size: 20px;
    }
    h4 {
      flex-grow: 1;
      font-family: "GandhiSansRegular";
      font-weight: 100;
      font-size: 16px;
    }
    h3,
    h4 {
      margin: 0;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagem = ({ foto, expandida = false }) => {
  const [icones, setIcones] = useState({
    favoritado: false,
    expandido: false,
  });

  const handleClicks = (icone) => {
    setIcones({ ...icones, [icone]: !icones[icone] });
  };

  return (
    <Figure $expandida={expandida} id={`foto- ${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={() => handleClicks("favoritado")}>
            {icones.favoritado ? (
              <AiFillHeart size={30} color="#c98cf1" />
            ) : (
              <AiOutlineHeart color="white" size={30} />
            )}
          </BotaoIcone>
          <BotaoIcone onClick={() => handleClicks("expandido")}>
            {icones.expandido ? (
              <BsArrowsAngleExpand size={30} color="white" />
            ) : (
              <AiOutlineExpandAlt size={30} color="white" />
            )}
          </BotaoIcone>
        </Rodape>
      </figcaption>
    </Figure>
  );
};
export default Imagem;
