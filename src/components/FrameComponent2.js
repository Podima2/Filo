import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <div className="what-plastic-we-accept">
      <div className="text-parent">
        <div className="text">{` `}</div>
        <div className="what-plastic-we1">What Plastic We Accept</div>
      </div>
      <div className="frame-parent5">
        <div className="frame-parent6">
          <div className="frame-wrapper6">
            <img
              className="frame-child7"
              alt=""
              src="/frame-480955222@2x.png"
            />
          </div>
          <div className="frame-wrapper7">
            <img
              className="frame-child8"
              alt=""
              src="/frame-480955223@2x.png"
            />
          </div>
        </div>
        <div className="hdpe-high-density-polyethylen-parent">
          <div className="hdpe-high-density-container">
            <p className="hdpe-high-density">{`HDPE (High Density Polyethylene) and PET (Polyethylene Terephthalate) are generally the materials used to create bottle lids and bottle bodies for example. `}</p>
            <p className="hdpe-high-density">&nbsp;</p>
            <p className="hdpe-high-density">
              You can identify the type of plastic by looking at the plastic
              resin codes.
            </p>
          </div>
          <div className="hdpe-high-density-container">
            We accept these currently because they are the plastic that can be
            heated and extruded into filament for 3D printing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
