import  { useState,useContext } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

import GeneralContext from "../context/GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid,price }) => {
    const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);

    const totalCost = (stockQuantity * price).toFixed(2);

  const handleBuyClick = () => {
    api.post("/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: price,
      mode: "BUY",
    });

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
 <div className="container" id="buy-window">
      <div className="header">
        <h3>
          Buy {uid} <span>NSE</span>
        </h3>
        <p className="market-price">Market Price: ₹{Number(price).toFixed(2)}</p>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
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
              value={price}
              readOnly
            />
          </fieldset>
        </div>
        <p className="order-total">
          Total: ₹{totalCost}
        </p>
      </div>
     
      <div className="buttons">
        <span>Margin required ₹{totalCost}</span>
        <div>
          <Link to="" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;