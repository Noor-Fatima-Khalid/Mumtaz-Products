import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mock = [
      {
        id: 1,
        name: "Mustard Oil",
        price: "Rs.1,200.00 PKR",
        images: ["https://placehold.co/400"],
        soldOut: true,
      },
      {
        id: 2,
        name: "Chakki Atta",
        price: 800,
        image: "https://placehold.co/400",
        inStock: true,
      },
      {
        id: 3,
        name: "Organic Atta",
        price: 1050,
        image: "https://placehold.co/400",
        inStock: true,
      },
      {
        id: 1,
        name: "Mustard Oil",
        price: "Rs.1,200.00 PKR",
        images: ["https://placehold.co/400"],
        soldOut: true,
      },
      {
        id: 2,
        name: "Chakki Atta",
        price: 800,
        image: "https://placehold.co/400",
        inStock: true,
      },
      {
        id: 3,
        name: "Organic Atta",
        price: 1050,
        image: "https://placehold.co/400",
        inStock: true,
      },
      {
        id: 1,
        name: "Mustard Oil",
        price: "Rs.1,200.00 PKR",
        images: ["https://placehold.co/400"],
        soldOut: true,
      },
      {
        id: 2,
        name: "Chakki Atta",
        price: 800,
        image: "https://placehold.co/400",
        inStock: true,
      },
    ];

    setProducts(mock);
    setLoading(false);
  }, []);

  return (
    <div className="bg-green-50 min-h-screen flex flex-col py-10">
      <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-4 md:px-10 lg:px-12">

        <h1 className="text-2xl sm:text-3xl font-bold heading-teal mb-10">
          Shop Our Range
        </h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2px"
}}>
  {products.map((p) => (
    <div key={p.id}>
      <ProductCard product={p} />
    </div>
  ))}
</div>
        )}

      </div>
    </div>
  );
};

export default Shop;