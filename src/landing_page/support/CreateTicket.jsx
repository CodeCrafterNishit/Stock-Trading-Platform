function CreateTicket() {
  return (
    <>
      <div className="container">
        <div className="row support-ticket-section">

          <h1 className="fs-2 mb-5">
            To create a ticket, select a relevant topic
          </h1>

          {/* Account Opening */}
          <div className="col-12 col-md-4 support-ticket-card">
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
              Account Opening
            </h4>

            <a href="">Online Account Opening</a>
            <a href="">Account Verification</a>
            <a href="">Required Documents</a>
            <a href="">Account Opening Status</a>
            <a href="">NRI Account Opening</a>
            <a href="">Account Opening Charges</a>
            <a href="">Getting Started</a>
          </div>

          {/* Trading */}
          <div className="col-12 col-md-4 support-ticket-card">
            <h4>
              <i className="fa fa-line-chart" aria-hidden="true"></i>{" "}
              Trading
            </h4>

            <a href="">Placing an Order</a>
            <a href="">Order Status</a>
            <a href="">Buy and Sell Stocks</a>
            <a href="">Intraday Trading</a>
            <a href="">Delivery Trading</a>
            <a href="">Order Cancellation</a>
            <a href="">Trading Issues</a>
          </div>

          {/* Funds */}
          <div className="col-12 col-md-4 support-ticket-card">
            <h4>
              <i className="fa fa-wallet" aria-hidden="true"></i>{" "}
              Funds & Payments
            </h4>

            <a href="">Add Funds</a>
            <a href="">Withdraw Funds</a>
            <a href="">Payment Issues</a>
            <a href="">Wallet Balance</a>
            <a href="">Deposit Status</a>
            <a href="">Withdrawal Status</a>
            <a href="">Transaction Charges</a>
          </div>

          {/* Portfolio */}
          <div className="col-12 col-md-4 support-ticket-card">
            <h4>
              <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
              Portfolio
            </h4>

            <a href="">View Holdings</a>
            <a href="">Portfolio Performance</a>
            <a href="">Profit & Loss</a>
            <a href="">Manage Holdings</a>
            <a href="">Portfolio Reports</a>
            <a href="">Stock Allocation</a>
            <a href="">Portfolio Issues</a>
          </div>

          {/* Watchlist */}
          <div className="col-12 col-md-4 support-ticket-card">
            <h4>
              <i className="fa fa-star" aria-hidden="true"></i>{" "}
              Watchlist
            </h4>

            <a href="">Create a Watchlist</a>
            <a href="">Add Stocks</a>
            <a href="">Remove Stocks</a>
            <a href="">Manage Watchlists</a>
            <a href="">Stock Price Updates</a>
            <a href="">Watchlist Issues</a>
            <a href="">Getting Started</a>
          </div>

          {/* Account & Security */}
          <div className="col-12 col-md-4 support-ticket-card">
            <h4>
              <i className="fa fa-user" aria-hidden="true"></i>{" "}
              Account & Security
            </h4>

            <a href="">Update Profile</a>
            <a href="">Change Password</a>
            <a href="">Login Issues</a>
            <a href="">Two-Factor Authentication</a>
            <a href="">Account Security</a>
            <a href="">Reset Account Details</a>
            <a href="">Close Account</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default CreateTicket;