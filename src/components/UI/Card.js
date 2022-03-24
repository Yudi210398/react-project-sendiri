import "./card.css";

const Card = (props) => {
  const clases = "data-js " + props.className;

  return <tr className={clases}>{props.children}</tr>;
};

export default Card;
