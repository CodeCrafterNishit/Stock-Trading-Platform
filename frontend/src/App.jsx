import HeroPage from "./landing_page/home/HeroPage";
import Login from "./landing_page/login/Login";
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/AboutPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Products from "./landing_page/products/ProductsPage";
import Support from "./landing_page/support/SupportPage";
import NotFoundPage from "./landing_page/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
