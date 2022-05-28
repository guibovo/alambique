const ImageCta = props => {
  return(
    <div className={`image-cta ${props.classes}`}>
      <img className="image-wrapper" src={props.image} alt={props.alt}></img>
      <div id="image-cta-copy" className="copy">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <a href="#contacto">
          <button> {props.buttonText} </button>
        </a>
      </div>
    </div>
  );
}

export default ImageCta;