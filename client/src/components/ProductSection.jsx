const SECTIONS = [
  {
    id: "oils",
    eyebrow: "Nutrient Dense Oils",
    heading: "Cold Press Oils",
    body:
      "Our Pure Cold-Pressed Mustard and Sesame Oils are crafted with care to preserve their natural richness, flavor, and nutrients. Sustainably sourced and bottled with precision, these oils offer a luxurious, nutrient-dense alternative to conventional cooking oils. Packed with antioxidants and essential fatty acids, each drop is a celebration of purity, tradition, and elevated taste.",
    cta: "Shop Now",
    ctaHref: "/shop",
    img: "https://placehold.co/680x520/1C3A2F/C9A84C?text=Cold+Press+Oils",
    imgAlt: "Cold-pressed oil",
  },
  {
    id: "attas",
    eyebrow: "Black Atta & Chakki Atta",
    heading: "Premium Attas",
    body:
      "Stone-ground the traditional way to retain the bran, germ, and natural oils that industrial milling strips away. Our Chakki Ka Atta, Black Atta, and Organic variants give your rotis the texture, flavour, and nutrition your family deserves — nothing added, nothing removed.",
    cta: "Shop Now",
    ctaHref: "/shop",
    img: "https://placehold.co/680x520/2A5240/E2C97E?text=Premium+Attas",
    imgAlt: "Fresh rotis",
  },
  {
    id: "dates",
    eyebrow: "Natural Sweetness",
    heading: "Premium Dates",
    body:
      "Naturally sourced dates packed with energy, fiber, and essential minerals.",
    cta: "Shop Now",
    ctaHref: "/shop",
    img: "https://placehold.co/680x520/3D7A5A/F0E4B8?text=Premium+Dates",
    imgAlt: "Dates",
  },
]

const getBg = (i) => {
  return i % 2 === 0 ? "bg-sage" : "bg-gold-pale"
}

function ProductSection({ section, index }) {
  return (
    <section
      id={section.id}
      className={`py-20 px-6 border-b border-green-dark/10 ${getBg(index)}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Text */}
        <div>
          <p className="text-gold font-semibold uppercase tracking-[0.18em] text-xs">
            {section.eyebrow}
          </p>

          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-green-dark leading-tight">
            {section.heading}
          </h2>

          <p className="mt-5 text-text-mid leading-8">
            {section.body}
          </p>

          <a
            href={section.ctaHref}
            className="inline-flex mt-7 bg-transparent text-green-dark border-2 border-green-dark
            px-7 py-3 rounded-btn font-semibold uppercase tracking-wider text-sm
            hover:bg-green-dark hover:text-white transition"
          >
            {section.cta}
          </a>
        </div>

        {/* Image */}
        <div>
          <img
            src={section.img}
            alt={section.imgAlt}
            className="w-full h-[420px] object-cover rounded-card shadow-hover"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  )
}

export default function ProductSections() {
  return (
    <div>
      {SECTIONS.map((s, i) => (
        <ProductSection key={s.id} section={s} index={i} />
      ))}
    </div>
  )
}