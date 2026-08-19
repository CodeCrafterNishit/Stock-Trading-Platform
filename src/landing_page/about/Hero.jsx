function Hero() {
  return (
    <>
      <div className="container px-3 px-md-4">
        <div className="row mt-4 mt-md-5 text-center">
          <h1 className="col-12 fs-4 mt-4 mt-md-5 mb-4 mb-md-5 fw-medium lh-base">
            We are building a simpler way to explore investing.
            <br className="d-none d-md-block" /> Powered by technology,
            designed for modern investors.
          </h1>
        </div>

        <div className="row border-top mt-4 mt-md-5 mx-0">
          <div
            className="col-12 col-md-6 mt-4 mt-md-5 mb-0 mb-md-5 px-2 px-sm-3 px-md-5 pb-0 text-muted"
            style={{ lineHeight: "1.9", fontSize: "1.1rem" }}
          >
            <p>
              Investo is a stock trading platform project built with the goal
              of creating a simple and intuitive experience for exploring the
              stock market. It brings important investing tools together in one
              place while keeping the interface clean and easy to navigate.
            </p>

            <p>
              The platform focuses on features such as stock discovery,
              watchlists, portfolio tracking, order management, and market
              insights, providing users with a complete environment to explore
              how a modern trading platform can work.
            </p>

            <p>
              Built using the MERN stack, Investo combines a responsive React
              interface with a Node.js and Express backend and MongoDB for
              storing application data.
            </p>
          </div>

          <div
            className="col-12 col-md-6 mt-4 mt-md-5 mb-4 mb-md-5 px-2 px-sm-3 px-md-5 pb-0 text-muted"
            style={{ lineHeight: "1.9", fontSize: "1.1rem" }}
          >
            <p>
              Technology is at the heart of Investo. The platform is designed
              to make market information easier to explore while providing a
              smooth experience across different parts of the application.
            </p>

            <p>
              Investo also explores AI-powered features that can help users
              understand their portfolios, summarize market movements, search
              for stocks using natural language, and learn more about financial
              concepts.
            </p>

            <p>
              The project continues to evolve as new ideas, technologies, and
              improvements are explored, with the goal of creating a practical
              and engaging stock market experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
