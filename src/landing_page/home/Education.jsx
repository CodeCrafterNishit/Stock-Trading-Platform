import education from '../../../images/education.svg'
function Education() {
  return (
    <>
      <div className="container py-5 px-3 px-md-5">
        <div className="row align-items-center gx-5">
          <div className="col-12 col-md-6 d-flex mb-4 mb-md-0">
            <img src={education} alt="" className="img-fluid" style={{maxWidth: '480px', width: '100%'}} />
          </div>

          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="fs-3 mb-3" style={{fontWeight:600}}>Free and open market education</h1>
            <p className="mb-3 lh-lg">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="/" className="d-inline-block mb-3 text-decoration-none text-primary">Varsity</a>

            <p className="mb-3 lh-lg">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="/" className="d-inline-block text-decoration-none text-primary">TradingQ&A</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
