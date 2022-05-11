
const ContentBox = props => {
  return(
    <div className="content-box" key={props.key}>
      {props.text}
    </div>
  );
}

export default ContentBox;