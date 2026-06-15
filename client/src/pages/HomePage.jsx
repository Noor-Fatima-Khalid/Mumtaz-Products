import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import PromoSection from "../components/PromoSection";
import AboutUs from "../components/AboutUs";
import ProductSection from "../components/ProductSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <BestSellers />
      <PromoSection />
      <ProductSection />
      <AboutUs />
    </>
  );
};

export default HomePage;