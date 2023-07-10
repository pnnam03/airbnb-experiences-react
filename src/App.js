import vector from './img/Vector.svg'
import group77 from './img/Group 77.svg'
import image12 from './img/image 12.svg'
import wedding_photo from './img/wedding-photography 1.svg'
import mountain_bike from './img/mountain-bike 1.svg'
import star from './img/Star 1.svg'
import ellipse from './img/Ellipse 6.svg'

import './App.css';

function App() {
  return (
    <div className="body">
      <div className="rectangle13">
        <img src={vector} alt=""></img>
      </div>

      <div>
        <img className="all-img" src={group77} alt=""></img>
      </div>

      <div className="title">
        Online Experiences
      </div>

      <div className="content">
      Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </div>

      <div className="lower">
        <img src={image12} alt=""></img>
        <div>
          SOLD OUT
        </div>

        <div>
          <img src={star} className="star" alt=""></img>
          <div className="info">
            <div className="rating">5.0</div>
            <div>(6)</div>
            <img src={ellipse} className="ellipse" alt=""></img>
            <div>USA</div>
          </div>
        </div>
      </div>
      <div>
        <img src={wedding_photo} alt=""></img>
        <div>
          ONLINE
        </div>

        <div>

        </div>
      </div>
      <div>
        <img src={mountain_bike} alt=""></img>
      </div>
    </div>
  );
}

export default App;
