import pricingEquity from "../../../images/pricingEquity.svg";
import otherTrades from "../../../images/other-trades.svg";

function Pricing() {
  return (
    <>
      <div className="container py-5 my-5 px-3 px-md-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="fs-2 mb-3" style={{fontWeight:600}}>Unbeatable pricing</h1>
            <p className="mb-4 fs-5 lh-lg">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="/" className="text-decoration-none text-primary fw-semibold">See pricing</a>
          </div>

          <div className="col-12 col-md-6">
            <div className="d-flex gap-1 justify-content-center justify-content-md-center">
              <div className="d-flex align-items-start gap-2">
                  <img src={pricingEquity} alt="" className="img-fluid" style={{width:'min(100px,18vw)',height:'auto',maxHeight:'120px'}} />
                    <p className="mb-0 small" style={{display:'inline-block',marginLeft:'3px',maxWidth:'min(180px,36vw)',fontSize:'0.8rem'}}>Free account<br/>opening</p>
              </div>

              <div className="d-flex align-items-start gap-2">
                  <img src={pricingEquity} alt="" className="img-fluid" style={{width:'min(100px,18vw)',height:'auto',maxHeight:'120px'}} />
                    <p className="mb-0 small" style={{display:'inline-block',marginLeft:'3px',maxWidth:'min(180px,36vw)',fontSize:'0.8rem'}}>Free equity delivery<br/>and direct mutual funds</p>
              </div>

              <div className="d-flex align-items-start gap-2">
                  <img src={otherTrades} alt="" className="img-fluid" style={{width:'min(100px,18vw)',height:'auto',maxHeight:'120px'}} />
                    <p className="mb-0 small" style={{display:'inline-block',marginLeft:'3px',maxWidth:'min(180px,36vw)',fontSize:'0.8rem'}}>Intraday and<br/>F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
