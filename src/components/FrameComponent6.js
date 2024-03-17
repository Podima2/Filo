import { Link } from "react-router-dom";
import "./FrameComponent6.css";

const FrameComponent6 = () => {
  return (
    <div className="logo-group">
      <div className="logo1">
        <Link className="filo1" to="/">
          Filo
        </Link>
      </div>
      <img className="logo2-icon1" alt="" src="/logo2.svg" />
      <div className="how-it-works-group">
        <div className="how-it-works1">How It Works</div>
        <div className="how-it-works1">What Plastic We Accept</div>
        <div className="how-it-works1">Our transformation Centres</div>
        <div className="how-it-works1">Enterprise</div>
      </div>
    </div>
  );
};

export default FrameComponent6;
