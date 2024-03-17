import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import "./RegisterInterest.css";

const RegisterInterest = () => {
  return (
    <div className="register-interest">
      <FrameComponent6 />
      <div className="frame-parent2">
        <div className="frame-wrapper3">
          <div className="button-wrapper">
            <div className="button1">
              <div className="be-the-first">
                Be the first to know when our App is up and running!
              </div>
            </div>
          </div>
        </div>
        <FrameComponent5 />
      </div>
      <div className="separator5" />
      <FrameComponent4 />
    </div>
  );
};

export default RegisterInterest;
