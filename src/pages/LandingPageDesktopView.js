import { Link } from "react-router-dom";
import LogoArea from "../components/LogoArea";
import Hero from "../components/Hero";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import FrameComponent4 from "../components/FrameComponent4";
import "./LandingPageDesktopView.css";

const LandingPageDesktopView = () => {
  return (
    <div className="landing-page-desktop-view">
      <LogoArea />
      <Hero />
      <div className="separator">
        <img className="intersect-icon" alt="" src="/intersect.svg" />
      </div>
      <div className="how-stage-2-works">
        <div className="how-stage-1-works-wrapper">
          <div className="how-stage-1">How Stage 1 Works</div>
        </div>
        <div className="frame-parent">
          <div className="download-application-plastic-w-parent">
            <div className="download-application-plastic-container">
              <ol className="download-application-plastic-w">
                <li className="download-application">
                  <span>Download Application</span>
                </li>
                <li className="download-application">
                  <span>Plastic Waste Collection</span>
                </li>
                <li className="download-application">
                  <span>{`Bottle to Filament AI Verification `}</span>
                </li>
                <li className="download-application">
                  <span>Payment in B3TR tokens</span>
                </li>
                <li>
                  <span>{`Token exchanged to Fiat OR participation in `}</span>
                  <i className="stretch">Stretch*</i>
                </li>
              </ol>
            </div>
            <div className="download-application-plastic-container">
              AI photo detection will be used to detect whether plastic bottles
              are being converted into 3D printing filament
            </div>
            <div className="download-application-plastic-container">
              Stretch is our incentive scheme to resist swapping B3TR for money
              in order to donate them to VeBetterDAO treasury. Then utilising
              greater voting power to increase B3TR flow into Filo and being
              eligible for receiving more B3TR per bottle.
            </div>
            <Link className="button" to="/register-interest">
              <div className="download-app">Download APP</div>
              <img
                className="arrowdownright-icon"
                alt=""
                src="/arrowdownright.svg"
              />
            </Link>
          </div>
          <div className="frame-group">
            <div className="frame-wrapper">
              <img
                className="frame-child"
                alt=""
                src="/frame-48095522@2x.png"
              />
            </div>
            <div className="frame-container">
              <img className="frame-item" alt="" src="/frame-48095522@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="separator">
        <img className="intersect-icon" alt="" src="/intersect.svg" />
      </div>
      <FrameComponent3 />
      <div className="separator">
        <img className="intersect-icon" alt="" src="/intersect.svg" />
      </div>
      <div className="how-stage-2-works">
        <div className="how-stage-1-works-wrapper">
          <div className="how-stage-1">{`Enterprise `}</div>
        </div>
        <div className="frame-parent">
          <div className="download-application-plastic-w-parent">
            <div className="download-application-plastic-container">
              <p className="two-target-industries">Two Target Industries :</p>
              <p className="two-target-industries">&nbsp;</p>
              <ol className="specialist-car-parts-vertical">
                <li>Specialist Car Parts (vertical expansion)</li>
              </ol>
            </div>
            <div className="download-application-plastic-container">
              Discontinued car parts for specific car models are expensive to
              purchase if stock can be sourced at all. In addition, it is almost
              certain the part will be internationally shipped. We plan to cut
              carbon emissions by eliminating the need for long-distance
              shipping. In addition, HDPE filament roll sales will fund vertical
              expansion into metal part casting.
            </div>
            <div className="download-application-plastic-container">
              <ol className="specialist-car-parts-vertical">
                <li className="download-application">{`HDPE and PET Manufacturers `}</li>
              </ol>
              <p className="two-target-industries">&nbsp;</p>
              <p className="two-target-industries">
                Plastic bottle manufacturers will be able to offset their
                environmental impact by purchasing tokens from users which will
                be utilised similarly to carbon credits.
              </p>
              <p className="two-target-industries">&nbsp;</p>
            </div>
          </div>
          <div className="frame-group">
            <div className="frame-wrapper">
              <img
                className="frame-child"
                alt=""
                src="/frame-48095522@2x.png"
              />
            </div>
            <div className="frame-container">
              <img className="frame-item" alt="" src="/frame-48095522@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="separator">
        <img className="intersect-icon" alt="" src="/intersect.svg" />
      </div>
      <FrameComponent2 />
      <div className="separator">
        <img className="intersect-icon" alt="" src="/intersect.svg" />
      </div>
      <FrameComponent />
      <FrameComponent4 />
    </div>
  );
};

export default LandingPageDesktopView;
