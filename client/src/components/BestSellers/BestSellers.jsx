import { useState } from 'react'
import './BestSellers.css'

// ─── Placeholder product data — replace with real API data ───
const PRODUCTS = [
  {
    id: 1,
    name: 'Pure Cold Pressed Mustard Oil',
    price: 'Rs.1,200.00 PKR',
    images: [
      'https://placehold.co/400x400/1C3A2F/C9A84C?text=Mustard+Oil',
      'https://placehold.co/400x400/2A5240/E2C97E?text=Mustard+Oil+2',
    ],
  },
  {
    id: 2,
    name: 'Natural Chakki Ka Atta',
    price: 'Rs.800.00 PKR',
    images: [
      'https://placehold.co/400x400/1C3A2F/C9A84C?text=Chakki+Atta',
      'https://placehold.co/400x400/3D7A5A/F0E4B8?text=Chakki+Atta+2',
    ],
  },
  {
    id: 3,
    name: 'Organic Chakki Ka Atta',
    price: 'Rs.1,050.00 PKR',
    images: [
      'https://placehold.co/400x400/1C3A2F/C9A84C?text=Organic+Atta',
      'https://placehold.co/400x400/4A7C59/F0E4B8?text=Organic+Atta+2',
    ],
  },
  {
    id: 4,
    name: 'Black Atta',
    price: 'Rs.300.00 PKR',
    images: [
      'https://placehold.co/400x400/1C3A2F/C9A84C?text=Black+Atta',
      'https://placehold.co/400x400/2A3A2F/E2C97E?text=Black+Atta+2',
    ],
  },
  {
    id: 5,
    name: 'Purple Wheat Atta',
    price: 'Rs.700.00 PKR',
    images: [
      'https://placehold.co/400x400/1C3A2F/C9A84C?text=Purple+Wheat',
      'https://placehold.co/400x400/4A3060/E2C97E?text=Purple+Wheat+2',
    ],
  },
  {
    id: 6,
    name: 'Cold Pressed Sesame Oil',
    price: 'Rs.1,400.00 PKR',
    images: [
      'https://placehold.co/400x400/1C3A2F/C9A84C?text=Sesame+Oil',
      'https://placehold.co/400x400/5A4A2F/F0E4B8?text=Sesame+Oil+2',
    ],
  },
  {
    id: 7,
    name: 'Desi Ghee',
    price: 'Rs.2,500.00 PKR',
    images: [
      'https://placehold.co/400x400/1C3A2F/C9A84C?text=Desi+Ghee',
      'https://placehold.co/400x400/5A4A2F/F0E4B8?text=Desi+Ghee+2',
    ],
  },
]

function ProductCard({ product }) {
  const [imgIndex, setImgIndex]   = useState(0)
  const [pressed, setPressed]     = useState(false)

  const handleClick = () => {
    setImgIndex(prev => (prev + 1) % product.images.length)
  }

  return (
    <article
      className={`bs-card${pressed ? ' bs-card--pressed' : ''}`}
      onClick={handleClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      role="button"
      tabIndex={0}
      aria-label={`${product.name} — click to view alternate image`}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      <div className="bs-card__img-wrap">
        <img
          key={imgIndex}
          src={product.images[imgIndex]}
          alt={product.name}
          className="bs-card__img"
          loading="lazy"
        />
      </div>

      <div className="bs-card__body">
        <h3 className="bs-card__name">{product.name}</h3>
        <p className="bs-card__price">{product.price}</p>
        <button
          className="bs-card__atc"
          onClick={e => { e.stopPropagation(); /* TODO: dispatch cart action */ }}
          aria-label={`Add ${product.name} to cart`}
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default function BestSellers() {
  return (
    <section id="best-sellers" className="bs-section">
      <div className="bs-section__header">
        <p className="section-eyebrow">Customer Favourites</p>
        <h2 className="section-heading">Best Sellers</h2>
      </div>

      <div className="bs-track-wrap">
        <div className="bs-track">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}