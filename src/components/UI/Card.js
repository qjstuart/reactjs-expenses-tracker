import "./Card.css";

// this component will act as a container
// for the list of expenses

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
