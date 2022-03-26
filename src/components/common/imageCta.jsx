const ImageCta = props => {
  return(
    <div className="image-cta">
      <div>
        <img src={props.image} alt="Page Not Found">
        </img>
      </div>
      <div clasName="copy">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <button> {props.buttonText} </button>
      </div>
    </div>
  );
}

export default ImageCta;