const Imagem = ({ foto, expandida = false }) => {
  return (
    <figure>
      <img src={foto.path} alt="" />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <footer>
          <p>{foto.fonte}</p>
          <button>Favorito</button>
          <button>Expandir</button>
        </footer>
      </figcaption>
    </figure>
  );
};
export default Imagem;