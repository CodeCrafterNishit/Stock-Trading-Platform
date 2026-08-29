import {Link} from "react-router-dom"
function OpenAccount() {
    return ( 
        <>
        <div className="container py-5 ">
                    <div className="row d-flex flex-column align-items-center text-center">
                        <h1 className="mt-3">Open an Investo account</h1>
                        <p className="lead mb-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                        <Link to="/signup" className="btn btn-primary btn-sm mt-3  mx-auto d-block w-25 py-2 fs-5" style={{maxWidth:"205px",width:"100%"}}>Signup for free</Link>
                    </div>
                </div>
        </>
     );
}

export default OpenAccount;