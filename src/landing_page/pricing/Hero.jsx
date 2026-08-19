import PricingEquity from "../../../images/pricingEquity.svg";
import OtherTrades from "../../../images/other-trades.svg";
function Hero() {
  return (
    <>
      <div className="container ">
        <div className="row mt-5 text-center border-bottom">
          <h1 className="mt-5">Pricing</h1>
          <h3 className="text-muted mt-3 fs-5 mb-5">
            Free equity investments and flat ₹20 traday and F&O trades
          </h3>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-4 p-5">
            <img src={PricingEquity} alt="" />
            <h3 className="mt-2">Free equity delivery</h3>
            <p className="text-muted mt-3">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src={OtherTrades} alt="" />
            <h3 className="mt-2">Intraday and F&O trades</h3>
            <p className="text-muted mt-3">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src={PricingEquity} alt="" />
            <h3 className="mt-2">Free direct MF</h3>
            <p className="text-muted mt-3">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
