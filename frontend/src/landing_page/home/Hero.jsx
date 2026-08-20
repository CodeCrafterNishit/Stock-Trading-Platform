import homeHero from "../../../images/homeHero.png";
function Hero() {
    return ( 
        <>
        <div className="container py-5 ">
            <div className="row d-flex flex-column align-items-center text-center">
                <img src={homeHero} alt="" style={{width:"100%",maxWidth:"868px"}} className="img-fluid mb-4"/>
                <h1 className="mt-3">Invest in everything</h1>
                <p className="lead mb-3">Online platform to invest in stocks,derivatives,mutual funds and more</p>
                <button className="btn btn-primary btn-sm mt-3  mx-auto d-block w-25 py-2 fs-5" style={{maxWidth:"205px",width:"100%"}}>Signup Now</button>
            </div>
        </div>
        </>
     );
}

export default Hero;