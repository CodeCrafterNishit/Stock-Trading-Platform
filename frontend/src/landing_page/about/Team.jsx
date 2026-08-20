import NishitJain from "../../../images/NishitJain.jpg";

function Team() {
  return (
    <>
      <div className="container px-3 px-md-4">
        <div className="row mt-3 mt-md-4 text-center">
          <h1 className="col-12 fs-3 mt-3 mb-3 mb-md-4 fw-medium">
            Meet the Founder
          </h1>
        </div>

        <div className="row mt-4 mt-md-5 mx-0 align-items-center">
          <div className="col-12 col-md-6 mt-4 mt-md-5 mb-0 mb-md-5 px-2 px-sm-3 px-md-5 pb-0 text-center text-muted">
            <img
              src={NishitJain}
              className="img-fluid w-75"
              style={{ borderRadius: "100%" }}
              alt="Nishit Jain"
            />
            <h5 className="mt-3">Nishit Jain</h5>
            <p>Founder & Developer</p>
          </div>

          <div
            className="col-12 col-md-6 mt-4 mt-md-5 mb-4 mb-md-5 px-2 px-sm-3 px-md-5 pb-0 text-muted"
            style={{ lineHeight: "1.9", fontSize: "1.1rem" }}
          >
            <p>
              Nishit Jain founded Investo with the goal of building a simple
              and user-friendly platform that makes stock market investing
              easier to understand and explore.
            </p>

            <p>
              Investo brings together stock tracking, watchlists, portfolio
              management, orders, and market insights in one platform.
            </p>

            <p>
              The platform also explores AI-powered features to help users
              better understand their portfolios and the market.
            </p>

            <p>
              Built as a full-stack project using modern web technologies,
              Investo focuses on creating a clean and intuitive investing
              experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
