import React, { useEffect, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmDialog from "../components/ConfirmDialogue"; // FIXED NAME

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyItem, setBusyItem] = useState(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);

  const apiBase = "http://localhost:5000/api/cart";

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchCart = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(apiBase, getAuthHeader());
      setCartItems(data.items || []);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (itemId, newQty) => {
    if (newQty < 1) return;

    setBusyItem(itemId);
    try {
      const { data } = await axios.put(
        `${apiBase}/update`,
        { itemId, quantity: newQty },
        getAuthHeader()
      );
      setCartItems(data.items || []);
    } catch (err) {
      console.error("Failed to update quantity:", err);
    } finally {
      setBusyItem(null);
    }
  };

  const removeItem = async (itemId) => {
    setBusyItem(itemId);
    try {
      const { data } = await axios.delete(
        `${apiBase}/remove/${itemId}`,
        getAuthHeader()
      );
      setCartItems(data.items || []);
    } catch (err) {
      console.error("Failed to remove item:", err);
    } finally {
      setBusyItem(null);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete(`${apiBase}/clear`, getAuthHeader());
      setCartItems([]);
    } catch (err) {
      console.error("Failed to clear cart:", err);
    }
  };

  const estimatedTotal = cartItems.reduce(
    (sum, item) =>
      sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  if (loading)
    return (
      <p className="text-center mt-10 text-green-900">
        Loading cart...
      </p>
    );

  return (
    <div className="min-h-screen bg-green-50 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-900">
            Your Cart
          </h1>

          <div className="flex items-center gap-4">
            <Link
              to="/products"
              className="text-sm text-amber-700 hover:underline"
            >
              Continue shopping
            </Link>

            <button
              onClick={() => {
                setConfirmAction(() => clearCart);
                setConfirmOpen(true);
              }}
              className="text-sm text-red-500 hover:underline"
            >
              Clear cart
            </button>
          </div>
        </div>

        {/* CART ITEMS */}
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.itemId}
              className="border-t border-green-200 py-4 flex flex-col sm:flex-row justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.name || "product"}
                  className="w-20 h-20 object-cover rounded border"
                />

                <div>
                  <h2 className="font-semibold text-green-900">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Rs.{item.price || 0}
                  </p>
                  <p className="text-sm text-gray-600">
                    Size: {item.size}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* quantity */}
                <div className="flex items-center border rounded">
                  <button
                    className="px-3 py-2"
                    onClick={() =>
                      updateQuantity(item.itemId, item.quantity - 1)
                    }
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-4">
                    {item.quantity}
                  </span>

                  <button
                    className="px-3 py-2"
                    onClick={() =>
                      updateQuantity(item.itemId, item.quantity + 1)
                    }
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* delete */}
                <button
                  onClick={() => {
                    setConfirmAction(() => () =>
                      removeItem(item.itemId)
                    );
                    setConfirmOpen(true);
                  }}
                  className="text-red-500"
                >
                  <Trash2 size={18} />
                </button>

                <p className="font-semibold text-green-900">
                  Rs.{((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        )}

        {/* TOTAL */}
        {cartItems.length > 0 && (
          <div className="mt-6 text-right">
            <p className="text-lg font-bold text-green-900">
              Total: Rs.{estimatedTotal.toFixed(2)}
            </p>

            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold py-3 px-6 rounded">
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* CONFIRM DIALOG */}
      <ConfirmDialog
        open={confirmOpen}
        title="Are you sure?"
        message="This action cannot be undone."
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          setConfirmOpen(false);
          confirmAction?.();
        }}
      />
    </div>
  );
}