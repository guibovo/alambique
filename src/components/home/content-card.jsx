const Content = props => {
  return(
    <div className="home-content-card">
      <div className="title-wrapper">
        <div className={`title ${props.titleClasses}`}>{props.title}</div>
      </div>
      <div className={`text ${props.textClasses}`}>{props.text}</div>
    </div>
  );
}

export default Content;