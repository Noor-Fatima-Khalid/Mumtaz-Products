// CartNotification.jsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartNotification({ show, message, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000); // auto-hide after 30s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 right-4 z-50 bg-white border shadow-lg rounded-xl p-4 w-72"
        >
          <p className="text-sm text-gray-900 font-medium">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
