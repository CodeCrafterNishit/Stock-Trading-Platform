import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      {allOrders.length === 0 ? (
        <p>You haven't placed any orders today</p>
      ) : (
        <div className="order-table">
          <table>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
            {allOrders.map((order, index) => {
              const modeClass = order.mode === "BUY" ? "profit" : "loss";
              return (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td className={modeClass}>{order.mode}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;