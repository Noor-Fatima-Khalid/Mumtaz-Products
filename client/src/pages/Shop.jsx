import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import CartNotification from "../components/CartNotification";
import { useState, useRef, useEffect } from "react";

const Products = () => {
  // filter states
  const [openFilter, setOpenFilter] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const filterRef = useRef(null);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // cart states
  const { notif, setNotif } = useCart();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setOpenFilter(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleAvailability = (option) => {
    if (availability.includes(option)) {
      setAvailability(availability.filter((item) => item !== option));
    } else {
      setAvailability([...availability, option]);
    }
  };

  return (
    <div className="bg-green-50 min-h-screen flex flex-col pt-32 pb-20">
      <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-4 md:px-10 lg:px-12 flex flex-col">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold heading-teal drop-shadow-sm mb-10 text-center sm:text-left">
          Shop Our Range
        </h1>

        {/* Filters */}
        <div ref={filterRef} className="mb-6 hidden sm:block">
          <h1 className="text-base font-medium heading-teal mb-2 sm:mb-0">
            Filters:
          </h1>

          <div className="flex flex-row gap-3 sm:gap-6 mt-1 sm:mt-0 sm:ml-4">

            {/* Availability */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenFilter(openFilter === "availability" ? null : "availability")
                }
                className="flex text-gray-700 items-center gap-2 px-2 py-1 hover:underline"
              >
                Availability <span className="text-xs">▼</span>
              </button>

              {openFilter === "availability" && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-400 p-3 z-10">
                  <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                    <input
                      type="checkbox"
                      checked={availability.includes("in-stock")}
                      onChange={() => toggleAvailability("in-stock")}
                    />
                    In stock
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer mt-2 text-gray-800">
                    <input
                      type="checkbox"
                      checked={availability.includes("out-of-stock")}
                      onChange={() => toggleAvailability("out-of-stock")}
                    />
                    Out of stock
                  </label>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenFilter(openFilter === "price" ? null : "price")
                }
                className="flex items-center gap-2 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition"
              >
                Price <span className="text-xs">▼</span>
              </button>

              {openFilter === "price" && (
                <div className="absolute left-0 mt-2 w-72 bg-white shadow-xl rounded-lg border border-gray-200 p-4 z-10">
                  <p className="text-sm font-medium text-gray-800 mb-3">
                    Enter Price Range
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-gray-600 text-sm">Rs.</span>
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange({ ...priceRange, min: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-gray-600 text-sm">Rs.</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange({ ...priceRange, max: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => setOpenFilter(null)}
                      className="w-full bg-nav text-white py-2 rounded-md"
                    >
                      Apply
                    </button>

                    <button
                      onClick={() => setPriceRange({ min: "", max: "" })}
                      className="w-full border border-gray-300 text-gray-700 py-2 rounded-md"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile filter button */}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="text-nav font-medium hover:underline"
              >
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Panel */}
        {mobileFiltersOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMobileFiltersOpen(false)}
            />

            <div className="fixed top-0 right-0 h-full w-72 bg-green-50 z-50 shadow-lg">
              <div className="p-4 border-b flex justify-between">
                <h2 className="font-semibold">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)}>✕</button>
              </div>

              <div className="p-4 space-y-4">
                <p className="font-medium">Availability</p>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={availability.includes("in-stock")}
                    onChange={() => toggleAvailability("in-stock")}
                  />
                  In stock
                </label>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={availability.includes("out-of-stock")}
                    onChange={() => toggleAvailability("out-of-stock")}
                  />
                  Out of stock
                </label>
              </div>

              <div className="absolute bottom-0 w-full p-4 border-t flex justify-between">
                <button
                  onClick={() => {
                    setAvailability([]);
                    setPriceRange({ min: "", max: "" });
                  }}
                  className="text-red-500 text-sm"
                >
                  Remove all
                </button>

                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="bg-nav text-white px-4 py-2 rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          </>
        )}

        {/* Products */}
        {loading ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found.</p>
        )}

        {/* Notification */}
        <CartNotification
          show={notif.show}
          productName={notif.productName}
          onClose={() => setNotif({ show: false, productName: "" })}
        />
      </div>
    </div>
  );
};

export default Products;