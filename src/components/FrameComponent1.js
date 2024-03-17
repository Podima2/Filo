import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  rectangle1461,
  cambridgeUnitedKingdom,
  propPadding,
  buttonPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const buttonStyle = useMemo(() => {
    return {
      padding: buttonPadding,
    };
  }, [buttonPadding]);

  return (
    <div className="rectangle-group">
      <img className="frame-child9" alt="" src={rectangle1461} />
      <div className="frame-parent7" style={frameDivStyle}>
        <div className="user-parent">
          <img className="user-icon" alt="" src="/user.svg" />
          <div className="john-doe">John Doe</div>
        </div>
        <div className="user-parent">
          <img className="user-icon" alt="" src="/calendarblank.svg" />
          <div className="john-doe">Feb 23, 2024</div>
        </div>
      </div>
      <div className="cambridge-united-kingdom">{cambridgeUnitedKingdom}</div>
      <div className="button3" style={buttonStyle}>
        <div className="view-details">View details</div>
        <img className="caretright-icon" alt="" src="/caretright.svg" />
      </div>
    </div>
  );
};

export default FrameComponent1;
