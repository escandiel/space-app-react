import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <dialog open={!!foto}>
          <Imagem foto={foto} expandida={true} />
          <p>Exemplo do Mozilla</p>
          <form method="dialog">
            <button type="submit">ok</button>
          </form>
        </dialog>
      )}

      {/* <dialog open={!!foto}>
        <Imagem foto={foto} expandida={true} />
        <p>Exemplo do Mozilla</p>
        <form method="dialog">
          <button type="submit">ok</button>
        </form>
      </dialog> */}
    </>
  );
};

export default ModalZoom;
