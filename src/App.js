import vector from "./img/Vector.svg";
import group77 from "./img/Group 77.svg";
import image12 from "./img/image 12.svg";
import wedding_photo from "./img/wedding-photography 1.svg";
import mountain_bike from "./img/mountain-bike 1.png";

import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="body">
      <div className="rectangle13">
        <img src={vector} alt=""></img>
      </div>

      <div>
        <img className="all-img" src={group77} alt=""></img>
      </div>

      <div className="title">Online Experiences</div>

      <div className="content">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </div>

      <div className="wrapper">
        <Card
          image={image12}
          rating="5.0"
          cnt_rating="(6)"
          title1="Life lessons with Katie Zaferes"
          price="$136"
          tag="SOLD OUT"
        />

        <Card
          image={wedding_photo}
          rating="5.0"
          cnt_rating="(30)"
          title1="Learn wedding photography"
          price="$125"
          tag="ONLINE"
        />

        <Card
          image={mountain_bike}
          rating="4.8"
          cnt_rating="(2)"
          title1="Group Mountain Biking"
          price="$50"
          tag="None"
        />
      </div>
    </div>
  );
}

export default App;
