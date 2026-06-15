import { createContext, useContext, useState } from "react";
import axios from "axios";
import CartNotification from "../components/CartNotification";

// create context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notif, setNotif] = useState({
    show: false,
    productName: "",
  });

  const addToCart = async (product, variant, quantity = 1) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("User not authenticated");
        return;
      }

      if (!product?._id || !variant?._id) {
        console.error("Invalid product or variant");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/cart/add",
        {
          productId: product._id,
          variantId: variant._id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart((prev) => {
        const existingItem = prev.find(
          (item) =>
            item.productId === product._id &&
            item.variantId === variant._id
        );

        if (existingItem) {
          return prev.map((item) =>
            item.productId === product._id &&
            item.variantId === variant._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [
          ...prev,
          {
            productId: product._id,
            variantId: variant._id,
            quantity,
          },
        ];
      });

      // show notification
      setNotif({
        show: true,
        productName: product.name || "Item",
      });
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, notif, setNotif }}>
      {children}

      {/* Notification */}
      <CartNotification
        show={notif.show}
        message={`${notif.productName} added to cart`}
        onClose={() =>
          setNotif({
            show: false,
            productName: "",
          })
        }
      />
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);