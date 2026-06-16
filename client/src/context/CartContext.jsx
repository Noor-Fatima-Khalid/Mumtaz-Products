import { createContext, useContext, useState } from "react";
import axios from "axios";
import CartNotification from "../components/CartNotification";

// create context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notif, setNotif] = useState({ show: false, productName: "" });

  const addToCart = async (product, variant, quantity = 1) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("User not authenticated");

      await axios.post(
        "http://localhost:5000/api/cart/add",
        { productId: product._id, variantId: variant._id, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCart((prev) => {
        const existing = prev.find(
          (item) =>
            item.productId === product._id && item.variantId === variant._id
        );
        if (existing) {
          return prev.map((item) =>
            item.productId === product._id && item.variantId === variant._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [
            ...prev,
            { productId: product._id, variantId: variant._id, quantity },
          ];
        }
      });

      // ✅ Trigger notification
      setNotif({ show: true, productName: product.name });
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, notif, setNotif }}>
      {children}
      {/* ✅ Notification always available */}
      <CartNotification
        show={notif.show}
        message={`${notif.productName} added to cart`}
        onClose={() => setNotif({ show: false, productName: "" })}
      />
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
