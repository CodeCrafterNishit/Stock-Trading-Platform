function Hero() {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className="support-content">

          <div id="supportWrapper">
            <h4 className="fw-normal">Investo Support Portal</h4>
            <a href="">Track Tickets</a>
          </div>

          <div className="row support-main">
            <div className="col-12 col-md-7 p-3">
              <h1 className="fs-3 mb-4">
                Search for an answer or browse help topics to create a ticket
              </h1>

              <input
                type="text"
                placeholder="Eg. How do I open an Investo account?"
              />

              <div className="support-links mt-4">
                <a href="">Track account opening</a>
                <a href="">Track account verification</a>
                <a href="">Trading and investing help</a>
                <a href="">Investo user guide</a>
              </div>
            </div>

            <div className="col-12 col-md-5 p-3">
              <h1 className="fs-3 mb-4">Featured</h1>

              <ol className="featured-list">
                <li>
                  <a href="">
                    How to complete your Investo account opening
                  </a>
                </li>

                <li>
                  <a href="">
                    Understanding your first stock order
                  </a>
                </li>
              </ol>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;