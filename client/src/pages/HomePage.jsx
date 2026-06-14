import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BestSellers from "../components/BestSellers/BestSellers";
import PromoSection from "../components/PromoSection/PromoSection";
import AboutUs from "../components/AboutUs/AboutUs";
import ProductSection from "../components/ProductSection/ProductSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BestSellers />
      <PromoSection />
      <ProductSection />
      <AboutUs />
    </>
  );
};

export default HomePage;