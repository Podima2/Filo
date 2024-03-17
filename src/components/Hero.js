import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="earn-money-by-cleaning-your-ne-parent">
        <div className="earn-money-by">
          Earn money by cleaning your neighbourhood
        </div>
        <div className="get-paid-for">
          Get paid for every kilo of HDPE plastic delivered to one of our
          transformation centres
        </div>
        <Link className="button2" to="/register-interest">
          <div className="join-as-a">Join as a collector</div>
          <img
            className="arrowdownright-icon1"
            alt=""
            src="/arrowdownright.svg"
          />
        </Link>
      </div>
      <div className="rectangle-parent">
        <img className="rectangle-icon" alt="" src="/rectangle-1464@2x.png" />
        <img className="frame-child1" alt="" src="/rectangle-1463@2x.png" />
        <img className="frame-child1" alt="" src="/rectangle-1467@2x.png" />
        <img className="rectangle-icon" alt="" src="/rectangle-1462@2x.png" />
        <img className="rectangle-icon" alt="" src="/rectangle-1466@2x.png" />
      </div>
    </div>
  );
};

export default Hero;
