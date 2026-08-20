import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import KiteImg from "../../../images/kite.png";
import CoinImg from "../../../images/coin.png";
import VarsityImg from "../../../images/varsity.png";
import ConsoleImg from "../../../images/console.png";
import KiteConnectImg from "../../../images/kiteconnect.png";

import GooglePlay from "../../../images/googlePlayBadge.svg";
import AppStore from "../../../images/appstoreBadge.svg";
function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        ImageUrl={KiteImg}
        ProductName="Kite"
        ProdDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo="Try Demo"
        LearnMore="Learn More"
        GooglePlay={GooglePlay}
        AppStore={AppStore}
      />
      <RightSection
        ImageUrl={ConsoleImg}
        ProductName="Console"
        ProdDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        LearnMore="Learn More"
      />

      <LeftSection
        ImageUrl={CoinImg}
        ProductName="Coin"
        ProdDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        TryDemo="Coin"
        LearnMore=""
        GooglePlay={GooglePlay}
        AppStore={AppStore}
      />
      <RightSection ImageUrl={KiteConnectImg} ProductName="Kite Connect Api" ProdDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." LearnMore="Kite Connect"/>

      <LeftSection
        ImageUrl={VarsityImg}
        ProductName="Varsity Mobile"
        ProdDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        TryDemo=""
        LearnMore=""
        GooglePlay={GooglePlay}
        AppStore={AppStore}
      />
      <p className="text-center mb-5 mt-5">Want to know more about our technology stack? Check out the Investo.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductsPage;
