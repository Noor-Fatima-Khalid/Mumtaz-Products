import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [pressed, setPressed] = useState(false)

  if (!product) return null

  const {
    _id,
    id,
    name,
    price,
    image,
    images,
    inStock,
    soldOut,
  } = product

  const finalImage = image || images?.[0] || "https://via.placeholder.com/300"
  const finalName = name || "Unnamed Product"

  const finalPrice =
    typeof price === "string"
      ? price
      : `Rs. ${(price || 0).toLocaleString()} PKR`

  const finalInStock = inStock ?? (soldOut ? false : true)
  const finalId = _id || id

  return (
    <article
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      className={`
        w-[240px] h-[360px]
        mx-auto flex-shrink-0
        select-none cursor-pointer
        bg-[#f8edd3]
        border border-[#b4914b1f]
        rounded-card
        shadow-card
        overflow-hidden
        flex flex-col
        transition-shadow duration-200
        ${pressed ? "shadow-press" : "hover:shadow-hover"}
      `}
    >
      {/* IMAGE */}
      <div className="relative w-full h-[220px] bg-[#f8edd3] border-b-2 border-[#b4914b2e]">
        <img
          src={finalImage}
          alt={finalName}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {!finalInStock && (
          <div className="absolute bottom-2 right-2 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Sold Out
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-green-dark text-base font-semibold leading-tight mb-1">
          {finalName}
        </h3>

        <p className="text-text-mid text-sm font-medium mb-3">
          {finalPrice}
        </p>

        {/* BUTTON */}
        <div className="mt-auto">
          <button
            disabled={!finalInStock}
            onClick={(e) => {
              e.stopPropagation();

              console.log("Add to cart:", finalId);

              navigate("/cart"); // 👈 redirect to cart page
            }}
            className={`
              w-full py-2 text-sm uppercase tracking-wide font-semibold
              border-2 border-green-dark
              rounded-btn
              box-border
              transition-all duration-200

              ${finalInStock
                          ? "text-green-dark bg-transparent hover:bg-green-dark hover:text-white hover:border-green-dark"
                          : "text-green-dark bg-transparent opacity-50 cursor-not-allowed"
                        }
            `}
            >
            {finalInStock ? "Add to cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </article>
  )
}