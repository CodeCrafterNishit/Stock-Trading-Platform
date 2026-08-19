import largestBroker from "../../../images/largestBroker.svg";
import pressLogos from "../../../images/pressLogos.png"
function Awards() {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-6 p-4 d-flex justify-content-center">
            <img src={largestBroker} className="img-fluid my-3" alt="" />
          </div>
          <div className="col-12 col-md-6 p-4 text-center text-md-start">
            <h1 className="mb-3">Largest stock broker in India</h1>
            <p className="mb-4">
              2+ million Investo clients contribute to over 15% of all retail
              ordre volumes in India daily by trading and investing in:
            </p>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <ul className=" mb-0">
                        <li>Future and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6">
                       <ul className=" mb-0">
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Govt. Securities</li>
                    </ul>
                </div>
            </div>
            <img src={pressLogos} alt="" className="mt-4 img-fluid d-block mx-auto" style={{width:"90%"}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
