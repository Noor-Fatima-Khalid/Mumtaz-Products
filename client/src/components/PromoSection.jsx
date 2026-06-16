import { Link } from "react-router-dom";

export default function PromoSection() {
  return (
    <section className="bg-green-mid py-24 px-6">
      <div className="max-w-[680px] mx-auto text-center">

        <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs mb-2">
          Our Promise
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
          A Return to Authentic Living
        </h2>

        <p className="text-white/80 text-[1.05rem] leading-8 font-light mb-10">
          Mumtaz Products is a movement to reconnect with our roots, restore trust in our food,
          and revive the simplicity of traditional living. Pure, honest, and uncompromised.
        </p>

        <Link to='/shop'
          className="inline-flex items-center gap-2 bg-gold text-green-dark font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-btn border-2 border-gold transition hover:bg-transparent hover:text-gold hover:shadow-card"
        >
          Shop Now
        </Link>

      </div>
    </section>
  )
}
