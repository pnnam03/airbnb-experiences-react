import "./Card.css";
import star from "./img/Star 1.svg";
import ellipse from "./img/Ellipse 6.svg";

function Card(props) {
  return (
    <div className="lower">
      <img src={props.image} alt="" className="big-image"></img>
      <div className="tag" id={props.tag}>
        <div className="rect">{props.tag}</div>
      </div>

      <div className="block">
        <div className="info">
          <img src={star} className="star" alt=""></img>
          <div className="rating">{props.rating}</div>
          <div className="count-rating">{props.cnt_rating}</div>
          <img src={ellipse} className="ellipse" alt=""></img>
          <div className="country">USA</div>
        </div>

        <div className="title1">{props.title1}</div>

        <div className="price">
          <span className="bold">From {props.price} </span>/ person
        </div>
      </div>
    </div>
  );
}

export default Card;
