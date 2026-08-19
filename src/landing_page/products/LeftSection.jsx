function LeftSection({
  ImageUrl,
  ProductName,
  ProdDescription,
  TryDemo,
  LearnMore,
  GooglePlay,
  AppStore,
}) {
  return (
    <>
      <div className="container">
        <div
          className="row p-5  d-flex justify-content-center  align-items-start"
          style={{ padding: "2rem 1.25rem", margin: "0 0.6rem" }}
        >
          <div
            className="col-12 col-md-6 mt-5"
            style={{
              padding: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
            }}
          >
            <img
              src={ImageUrl}
              alt=""
              style={{
                width: "100%",
                maxWidth: "1200px",
                paddingLeft: "0.6rem",
                display: "block",
                objectFit: "cover",
                transform: "scale(1.03)",
              }}
            />
          </div>
          <div
            className="col-12 col-md-6 "
            style={{ padding: "2.9rem", paddingLeft: "10rem" }}
          >
            <h1 className="fs-3 fw-medium mt-5">{ProductName}</h1>
            <p
              className="mt-4"
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                marginBottom: "0.8rem",
                maxWidth: "420px",
              }}
            >
              {ProdDescription}
            </p>
            <div
              style={{
                display: "flex",
                gap: "18px",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <a className="text-decoration-none" href="">
                {TryDemo}
              </a>
              <a className="text-decoration-none" href="">
                {LearnMore}
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <img
                src={GooglePlay}
                alt="google-play"
                style={{ width: "150px", height: "auto" }}
              />
              <img
                src={AppStore}
                alt="app-store"
                style={{ width: "150px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
