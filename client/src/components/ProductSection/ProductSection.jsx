import './ProductSection.css'

const SECTIONS = [
  {
    id: 'oils',
    eyebrow: 'Nutrient Dense Oils',
    heading: 'Cold Press Oils',
    body: 'Our Pure Cold-Pressed Mustard and Sesame Oils are crafted with care to preserve their natural richness, flavor, and nutrients. Sustainably sourced and bottled with precision, these oils offer a luxurious, nutrient-dense alternative to conventional cooking oils. Packed with antioxidants and essential fatty acids, each drop is a celebration of purity, tradition, and elevated taste.',
    cta: 'Shop Now',
    ctaHref: '/products/oils',
    img: 'https://placehold.co/680x520/1C3A2F/C9A84C?text=Cold+Press+Oils',
    imgAlt: 'Cold-pressed oil being poured into a pan',
    reverse: false,
  },
  {
    id: 'attas',
    eyebrow: 'Black Atta & Chakki Atta',
    heading: 'Premium Attas',
    body: 'Stone-ground the traditional way to retain the bran, germ, and natural oils that industrial milling strips away. Our Chakki Ka Atta, Black Atta, and Organic variants give your rotis the texture, flavour, and nutrition your family deserves — nothing added, nothing removed.',
    cta: 'Shop Now',
    ctaHref: '/products/attas',
    img: 'https://placehold.co/680x520/2A5240/E2C97E?text=Premium+Attas',
    imgAlt: 'Freshly made rotis on a plate',
    reverse: true,
  },
]

function ProductSection({ section }) {
  return (
    <div
      id={section.id}
      className={`ps-block${section.reverse ? ' ps-block--reverse' : ''}`}
    >
      <div className="ps-block__inner">
        {/* Text */}
        <div className="ps-block__text">
          <p className="section-eyebrow">{section.eyebrow}</p>
          <h2 className="section-heading ps-block__heading">{section.heading}</h2>
          <p className="ps-block__body">{section.body}</p>
          <a href={section.ctaHref} className="outline-btn ps-block__cta">
            {section.cta}
          </a>
        </div>

        {/* Image */}
        <div className="ps-block__media">
          <img
            src={section.img}
            alt={section.imgAlt}
            className="ps-block__img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default function ProductSections() {
  return (
    <div className="product-sections">
      {SECTIONS.map(s => <ProductSection key={s.id} section={s} />)}
    </div>
  )
}