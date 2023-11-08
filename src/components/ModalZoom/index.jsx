import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  padding: 0;
  border: none;
  outline: none;
  background: transparent; //tira a borda default do dialog

  && Figure {
    width: 1156px;
    height: 740px;
    border: none !important;
  }
`;

const BotaoSairModalEstilizado = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background-color: transparent;
  border: none;
`;

const IconeFechar = styled(AiOutlineClose)`
  color: white;
  font-size: 28px;
`;

const BotaoSairModal = () => {
  return (
    <BotaoSairModalEstilizado>
      <IconeFechar />
    </BotaoSairModalEstilizado>
  );
};

const ModalZoom = ({ foto, aoFechar }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} />
            <form method="dialog">
              <BotaoSairModal />
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
