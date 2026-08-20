import Investo from "../../../frontend/images/investo.png";
import GooglePlay from "../../../frontend/images/googlePlayBadge.svg";
import AppStore from "../../../frontend/images/appstoreBadge.svg";


function Footer() {
  return (
    <>
      <div className="bg-light">
        {/* Local footer styles — TODO: move these to a separate CSS file and refine hover */}
        <style>{`.footer-link{color:#000;text-decoration:none;} .footer-link:hover{color:var(--bs-link-color);} .footer-icon i{color:#000;font-size:1.25rem;} .footer-icon:hover i{color:var(--bs-link-color);}`}</style>
        <div className="container py-5 px-3 px-md-5">
          <div className="row">
            <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex flex-column">
              <img src={Investo} alt="" className="mb-2 mt-n1" style={{ width: "50%" }} />
              <p className="text-muted small mb-2">© 2010 - 2026, Investo Broking Ltd. All rights reserved.</p>

              <div className="d-flex flex-wrap gap-3 my-2">
                <a href="#" className="footer-icon"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className="footer-icon"><i className="fa-brands fa-square-facebook"></i></a>
                <a href="#" className="footer-icon"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="#" className="footer-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="footer-icon"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" className="footer-icon"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#" className="footer-icon"><i className="fa-brands fa-telegram"></i></a>
              </div>

              <div className="d-flex gap-2 mt-3 align-items-center">
                <img src={GooglePlay} alt="" style={{height:'40px', objectFit:'contain'}} />
                <img src={AppStore} alt="" style={{height:'40px', objectFit:'contain'}} />
              </div>
            </div>

            <div className="col-6 col-md-2 mb-3 mb-md-0 ">
              <p className="fw-medium fs-4" style={{ fontWeight: 500 }}>
                Account
              </p>
              <a href="/account/open-demat" className="d-block footer-link">
                Open demat account
              </a>
              <a href="/account/minor-demat" className="d-block footer-link">
                Minor demat account
              </a>
              <a href="/account/nri-demat" className="d-block footer-link">
                NRI demat account
              </a>
              <a href="/account/huf-demat" className="d-block footer-link">
                HUF demat account
              </a>
              <a href="/account/commodity" className="d-block footer-link">
                Commodity
              </a>
              <a
                href="/account/dematerialisation"
                className="d-block footer-link"
              >
                Dematerialisation
              </a>
              <a href="/account/fund-transfer" className="d-block footer-link">
                Fund transfer
              </a>
              <a href="/account/mtf" className="d-block footer-link">
                MTF
              </a>
            </div>

            <div className="col-6 col-md-3 mb-3 mb-md-0">
              <p className="fw-medium fs-4" style={{ fontWeight: 500 }}>
                Support
              </p>
              <a href="/support" className="d-block footer-link">
                Support portal
              </a>
              <a href="/support/complaint" className="d-block footer-link">
                How to file a complaint?
              </a>
              <a href="/support/status" className="d-block footer-link">
                Status of your complaints
              </a>
              <a href="/support/bulletin" className="d-block footer-link">
                Bulletin
              </a>
              <a href="/support/circular" className="d-block footer-link">
                Circular
              </a>
              <a href="/support/blog" className="d-block footer-link">
                Investo blog
              </a>
              <a href="/support/downloads" className="d-block footer-link">
                Downloads
              </a>
            </div>

            <div className="col-6 col-md-2 mb-3 mb-md-0">
              <p className="fw-medium fs-4" style={{ fontWeight: 500 }}>
                Company
              </p>
              <a href="/about" className="d-block footer-link">
                About
              </a>
              <a href="/about/philosophy" className="d-block footer-link">
                Philosophy
              </a>
              <a href="/press" className="d-block footer-link">
                Press & media
              </a>
              <a href="/careers" className="d-block footer-link">
                Careers
              </a>
              <a href="/csr" className="d-block footer-link">
                Investo Cares (CSR)
              </a>
              <a href="/investo-tech" className="d-block footer-link">
                Investo.tech
              </a>
              <a href="/open-source" className="d-block footer-link">
                Open source
              </a>
              <a href="/referral" className="d-block footer-link">
                Referral program
              </a>
            </div>

            <div className="col-6 col-md-2">
              <p className="fw-medium fs-4" style={{ fontWeight: 500 }}>
                Quick links
              </p>
              <a href="/ipos" className="d-block footer-link">
                Upcoming IPOs
              </a>
              <a href="/brokerage" className="d-block footer-link">
                Brokerage charges
              </a>
              <a href="/holidays" className="d-block footer-link">
                Market holidays
              </a>
              <a href="/calendar" className="d-block footer-link">
                Economic calendar
              </a>
              <a href="/calculators" className="d-block footer-link">
                Calculators
              </a>
              <a href="/markets" className="d-block footer-link">
                Markets
              </a>
              <a href="/sectors" className="d-block footer-link">
                Sectors
              </a>
              <a href="/gift-nifty" className="d-block footer-link">
                Gift Nifty
              </a>
            </div>
          </div>
          <p className="my-5">
            Investo is a stock trading platform project built for learning and
            demonstration purposes. The platform provides features such as
            market tracking, watchlists, portfolio management, and simulated
            trading.
          </p>
          <p>
            Investments in the securities market are subject to market risks.
            Please research carefully and understand the risks before making
            investment decisions.
          </p>
          <p>
            The information and market data displayed on Investo are provided
            for educational and demonstration purposes and should not be
            considered financial advice.
          </p>
          <div className="d-flex flex-wrap flex-md-nowrap gap-3 align-items-center justify-content-center mt-5" style={{overflowX: 'auto'}}>
            <a href="#" className="text-muted small text-decoration-none">NSE</a>
            <a href="#" className="text-muted small text-decoration-none">BSE</a>
            <a href="#" className="text-muted small text-decoration-none">MCX</a>
            <a href="#" className="text-muted small text-decoration-none">MSEI</a>
            <a href="#" className="text-muted small text-decoration-none">Terms &amp; conditions</a>
            <a href="#" className="text-muted small text-decoration-none">Policies &amp; procedures</a>
            <a href="#" className="text-muted small text-decoration-none">Privacy policy</a>
            <a href="#" className="text-muted small text-decoration-none">Disclosure</a>
            <a href="#" className="text-muted small text-decoration-none">For investor's attention</a>
            <a href="#" className="text-muted small text-decoration-none">Investor charter</a>
            <a href="#" className="text-muted small text-decoration-none">Sitemap</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
