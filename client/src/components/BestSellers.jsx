import ProductCard from "./ProductCard";

// Temporary frontend data (replace with DB/API later)
const PRODUCTS = [
  {
    id: 1,
    name: "Pure Cold Pressed Mustard Oil",
    price: "Rs.1,200.00 PKR",
    images: [
      "https://placehold.co/400x400/1C3A2F/C9A84C?text=Mustard+Oil",
      "https://placehold.co/400x400/2A5240/E2C97E?text=Mustard+Oil+2",
    ],
    soldOut: true,
  },
  {
    id: 2,
    name: "Natural Chakki Ka Atta",
    price: "Rs.800.00 PKR",
    images: [
      "https://placehold.co/400x400/1C3A2F/C9A84C?text=Chakki+Atta",
      "https://placehold.co/400x400/3D7A5A/F0E4B8?text=Chakki+Atta+2",
    ],
    soldOut: false,
  },
  {
    id: 3,
    name: "Organic Chakki Ka Atta",
    price: "Rs.1,050.00 PKR",
    images: [
      "https://placehold.co/400x400/1C3A2F/C9A84C?text=Organic+Atta",
      "https://placehold.co/400x400/4A7C59/F0E4B8?text=Organic+Atta+2",
    ],
    soldOut: false,
  },
  {
    id: 4,
    name: "Black Atta",
    price: "Rs.300.00 PKR",
    images: [
      "https://placehold.co/400x400/1C3A2F/C9A84C?text=Black+Atta",
      "https://placehold.co/400x400/2A3A2F/E2C97E?text=Black+Atta+2",
    ],
    soldOut: true,
  },
]

export default function BestSellers() {
  return (
    <section className="py-[50px] bg-sage overflow-hidden">

      {/* Header */}
      <div className="text-center px-8 mb-12">
        <p className="text-s uppercase tracking-[0.18em] text-gold font-semibold">
          Customer Favourites
        </p>

        <h2 className="font-display text-4xl sm:text-5xl font-bold text-green-dark">
          Best Sellers
        </h2>
      </div>

      {/* Track wrapper */}
      <div className="relative w-full px-[80px] max-sm:px-0 overflow-hidden">

        {/* Scroll track */}
        <div
          className="
            flex gap-6
            px-[48px] pb-6 pt-4
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            cursor-grab active:cursor-grabbing

            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]

            max-sm:gap-4 max-sm:px-5
          "
        >
          {PRODUCTS.map((product) => (
            <div key={product.id} className="snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}