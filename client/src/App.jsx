import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx"
import SingleProduct from "./pages/SingleProduct.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<cart />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}