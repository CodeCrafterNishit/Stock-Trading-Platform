import smallCase from "../../../images/smallcaseLogo.png";
import streakLogo from "../../../images/streakLogo.png";
import dittoLogo from "../../../images/dittoLogo.png";
import sensibullLogo from "../../../images/sensibullLogo.svg";
import goldenpiLogo from "../../../images/goldenpiLogo.png";
import InvestoFundHouse from "../../../images/InvestoFundHouse.png";

import "../../../src/style.css";

function Universe() {
  return (
    <>
      <div className="container">
        <div className="logo-grid">
          <div className="row text-center">
            <h1 className="mt-5 mb-4 fw-normal">The Investo Universe</h1>

            <p>
              Extend your trading and investment experience even further with
              our partner platforms
            </p>
            {/* First row */}
            <div className="col-12 col-md-4 logo-card text-muted">
              <div className="logo-box">
                <img src={smallCase} alt="smallcase" />
              </div>
              <p>
                Thematic investing platform that helps you invest in diversified
                baskets of stocks or ETFs.
              </p>
            </div>

            <div className="col-12 col-md-4 logo-card text-muted">
              <div className="logo-box">
                <img src={streakLogo} alt="streak" />
              </div>
              <p>
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>

            <div className="col-12 col-md-4 logo-card text-muted">
              <div className="logo-box">
                <img src={dittoLogo} alt="ditto" />
              </div>
              <p>
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>

            {/* Second row */}
            <div className="col-12 col-md-4 logo-card text-muted">
              <div className="logo-box">
                <img src={InvestoFundHouse} alt="Investo Fund House" />
              </div>
              <p>
                Curated mutual fund solutions backed by research to help you
                build long-term wealth.
              </p>
            </div>

            <div className="col-12 col-md-4 logo-card text-muted">
              <div className="logo-box">
                <img src={sensibullLogo} alt="Sensibull" />
              </div>
              <p>
                Options trading platform with powerful tools, analytics and
                market insights.
              </p>
            </div>

            <div className="col-12 col-md-4 logo-card text-muted">
              <div className="logo-box">
                <img src={goldenpiLogo} alt="GoldenPi" />
              </div>
              <p>
                Stock analysis and screening platform to help you make smarter
                investment decisions.
              </p>
            </div>
          </div>
          <button
            className="btn btn-primary btn-sm mt-3 mb-3  mx-auto d-block w-25 py-2 fs-5"
            style={{ maxWidth: "205px", width: "100%" }}
          >
            Sign Up for free
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
