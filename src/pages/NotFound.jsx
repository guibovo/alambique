import notFoundImage from "../assets/404.png";

const NotFound = props => {
  return(
    <div className="not-found">
      <img src={notFoundImage} alt="Page Not Found">
      </img>
      <div clasName="copy">
        <div className="title">Página no <br/> encontrada.</div>
        <div className="description">Parece que el servidor no <br/> sirve. Prueba a darle a volver.</div>
        <button> Volver </button>
      </div>
    </div>
  );
}

export default NotFound;