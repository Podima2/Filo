import FrameComponent1 from "./FrameComponent1";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="frame-parent8">
      <div className="our-transformation-centres-wrapper">
        <div className="our-transformation-centres1">
          Our Transformation Centres
        </div>
      </div>
      <div className="frame-parent9">
        <FrameComponent1
          rectangle1461="/rectangle-1461@2x.png"
          cambridgeUnitedKingdom="Cambridge, United Kingdom"
        />
        <FrameComponent1
          rectangle1461="/rectangle-14611@2x.png"
          cambridgeUnitedKingdom="Düsseldorf, Germany "
          propPadding="unset"
          buttonPadding="0px var(--padding-base)"
        />
        <FrameComponent1
          rectangle1461="/rectangle-14612@2x.png"
          cambridgeUnitedKingdom="Madrid, Spain"
          propPadding="unset"
          buttonPadding="0px var(--padding-base)"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
