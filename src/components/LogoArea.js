import "./LogoArea.css";

const LogoArea = () => {
  return (
    <div className="logo-parent">
      <div className="logo">
        <div className="filo">Filo</div>
      </div>
      <img className="logo2-icon" alt="" src="/logo2.svg" />
      <div className="how-it-works-parent">
        <div className="how-it-works">How It Works</div>
        <div className="how-it-works">What Plastic We Accept</div>
        <div className="how-it-works">Enterprise</div>
        <div className="how-it-works">Our Transformation Centres</div>
      </div>
    </div>
  );
};

export default LogoArea;
