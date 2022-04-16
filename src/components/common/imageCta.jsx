const ImageCta = props => {
  return(
    <div className="image-cta">
      <img className="image-wrapper" src={props.image} alt={props.alt}></img>
      <div id="image-cta-copy" clasName="copy">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <button> {props.buttonText} </button>
      </div>
    </div>
  );
}

export default ImageCta;