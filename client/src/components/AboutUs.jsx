import { Link } from "react-router-dom"

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs mb-3">
            Who We Are
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark leading-tight">
            Rooted in Tradition,<br />Built for Today
          </h2>

          <p className="mt-5 text-text-mid leading-8 text-base">
            At Mumtaz Products, we believe that purity is not just a promise, it's a way of life.
            From stone-ground Chakki Atta and nutrient-rich Multigrain flour to cold-pressed oils,
            ghee, and natural dates, our range is rooted in tradition yet crafted for modern lifestyles.
            Every product reflects our commitment to authenticity, quality, and health. We are here to
            reconnect families with food that is wholesome, natural, and true to its origin.
          </p>

          <Link to="/shop"
            className="inline-flex mt-4 items-center gap-2 bg-gold text-green-dark font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-btn border-2 border-gold transition hover:bg-transparent hover:text-gold hover:shadow-card"
          >
            Our Products
          </Link>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-card overflow-hidden shadow-hover relative">

            <img
              src="https://placehold.co/560x480/1C3A2F/C9A84C?text=About+Mumtaz"
              alt="Mumtaz Products — our story"
              className="w-full h-[480px] object-cover"
            />

            {/* Gold accent corner */}
            <div className="absolute bottom-[-16px] right-[-16px] w-[120px] h-[120px] border-r-4 border-b-4 border-gold rounded-br-card pointer-events-none" />

          </div>
        </div>

      </div>
    </section>
  )
}