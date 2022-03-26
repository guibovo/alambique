const ContentText = props => {
  return (
    <div className="content-text">
      <div className="title-wrapper">
        <div className={`title ${props.titleClasses}`}>{props.title}</div>
      </div>
      <div className={`text ${props.textClasses}`}>{props.text}</div>
    </div>
  )
}

export default ContentText;