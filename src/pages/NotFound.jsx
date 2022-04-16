import notFoundImage from "../assets/404.png";
import ImageCta from "../components/common/imageCta";

const NotFound = props => {
  return(
    <div className="page-content small-content">
      <ImageCta 
        classes="flex-d-important"
        image={notFoundImage}
        title={[`Página no`, <br/>, `encontrada.`]}
        description={[`Parece que el servidor no`, <br/>, `sirve. Prueba a darle a volver.`]}
        buttonText="Volver"
      />
    </div>
  );
}

export default NotFound;