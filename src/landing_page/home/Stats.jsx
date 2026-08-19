import ecosystem from "../../../images/ecosystem.png";
function Stats() {
  return (
    <>
      <div className="container py-5 my-5 px-3 px-md-5">
          <div className="row align-items-center justify-content-center gx-5">
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="fs-3 mb-3" style={{ fontWeight: 600 }}>
                Trust with confidence
              </h1>
              <h3 className="fs-5 mb-2" style={{ fontWeight: 600 }}>
                Customer-first always
              </h3>
              <p className="mb-3">
                That's why 1.6+ crore customers trust Investo with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>

              <h3 className="fs-5 mt-4 mb-2" style={{ fontWeight: 600 }}>
                No spam or gimmicks
              </h3>
              <p className="mb-3">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>

              <h3 className="fs-5 mt-4 mb-2" style={{ fontWeight: 600 }}>
                The Investo universe
              </h3>
              <p className="mb-3">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>

              <h3 className="fs-5 mt-4 mb-2" style={{ fontWeight: 600 }}>
                Do better with money
              </h3>
              <p className="mb-0">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>

            <div className="col-12 col-md-6 d-flex flex-column align-items-center">
              <img
                src={ecosystem}
                alt=""
                className="img-fluid mb-3"
                style={{ maxWidth: "460px", width: "100%" }}
              />
              <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
                <a
                  href="/"
                  className="text-decoration-none text-primary"
                  style={{ fontWeight: 600 }}
                >
                  Explore our products
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-primary"
                  style={{ fontWeight: 600 }}
                >
                  Try kite demo
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Stats;
