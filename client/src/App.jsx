import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <Routes>

      <Route path="/login" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />

      {/* ✅ Main site WITH navbar/footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
      </Route>

    </Routes>
  );
}