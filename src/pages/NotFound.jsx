import notFoundImage from "../assets/404.png";

const NotFound = props => {
  return(
    <div className="page-content">
    <div className="not-found">
      <div>
        <img src={notFoundImage} alt="Page Not Found">
        </img>
      </div>
      <div clasName="copy">
        <div className="title">Página no <br/> encontrada.</div>
        <div className="description">Parece que el servidor no <br/> sirve. Prueba a darle a volver.</div>
        <button> Volver </button>
      </div>
    </div>
    </div>
  );
}

export default NotFound;