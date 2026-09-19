import React, { useState, useRef } from "react";
import BuyActionWindow from "../components/BuyActionWindow";
import SellActionWindow from "../components/SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, qty, avg) => {},
  closeSellWindow: () => {},
  registerHoldingsRefresh: (fn) => {},
  refreshHoldings: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellUID, setSelectedSellUID] = useState("");
  const [selectedSellQty, setSelectedSellQty] = useState(0);
  const [selectedSellAvg, setSelectedSellAvg] = useState(0);

  const holdingsRefreshRef = useRef(() => {});

  const handleOpenBuyWindow = (uid, price) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  const handleOpenSellWindow = (uid, qty, avg) => {
      console.log("openSellWindow called", uid, qty, avg);
    setIsSellWindowOpen(true);
    setSelectedSellUID(uid);
    setSelectedSellQty(qty);
    setSelectedSellAvg(avg);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellUID("");
    setSelectedSellQty(0);
    setSelectedSellAvg(0);
  };

  const registerHoldingsRefresh = (fn) => {
    holdingsRefreshRef.current = fn;
  };

  const refreshHoldings = () => {
    holdingsRefreshRef.current();
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        registerHoldingsRefresh,
        refreshHoldings,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} price={selectedStockPrice} />
      )}
      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedSellUID}
          qty={selectedSellQty}
          avg={selectedSellAvg}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;