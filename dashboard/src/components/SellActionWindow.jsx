import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

import GeneralContext from "../context/GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, qty: ownedQty, avg }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [livePrice, setLivePrice] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/allStocks").then((res) => {
      const stock = res.data.find((s) => s.name === uid);
      if (stock) {
        setLivePrice(stock.price);
      }
    });
  }, [uid]);

  const totalValue = (stockQuantity * livePrice).toFixed(2);

  const handleSellClick = () => {
    if (stockQuantity > ownedQty) {
      setError(`You own only ${ownedQty} shares`);
      return;
    }
    api
      .post("/sellOrder", {
        name: uid,
        qty: stockQuantity,
      })
      .then(() => {
        generalContext.refreshHoldings();
        generalContext.closeSellWindow();
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Sell failed");
      });
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window">
      <div className="header">
        <h3>
          Sell {uid} <span>NSE</span>
        </h3>
        <p className="market-price">
          Market Price: ₹{Number(livePrice).toFixed(2)}
        </p>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty. (max {ownedQty})</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              max={ownedQty}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              value={livePrice}
              readOnly
            />
          </fieldset>
        </div>
        <p className="order-total">
          Avg. cost: ₹{Number(avg).toFixed(2)} &nbsp;|&nbsp; Total: ₹
          {totalValue}
        </p>
        {error && <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>}
      </div>

      <div className="buttons">
        <span>You'll receive ₹{totalValue}</span>
        <div>
          <Link to="" className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
