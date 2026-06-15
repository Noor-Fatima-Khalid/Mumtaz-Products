import heroImg from "../assets/hero.jpg"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* IMAGE */}
      <img
        src={heroImg}
        alt="Mumtaz Products"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-dark/60 via-green-dark/20 to-transparent" />

      {/* CONTENT (IMPORTANT: z-index fix) */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto text-white">

        <p className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-3">
          Straight from the source
        </p>

        <h1 className="font-display font-bold leading-tight text-4xl sm:text-5xl md:text-6xl">
          Pure. Pressed.<br />
          <em className="text-gold not-italic">Purposeful.</em>
        </h1>

        <p className="text-sage mt-4 max-w-xl text-base sm:text-lg">
          Cold-pressed oils, stone-ground attas, and heritage grains. Crafted without compromise.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <a
            href="/shop"
            className="bg-gold text-green-dark font-semibold uppercase text-sm px-8 py-3 rounded-btn border-2 border-gold hover:bg-transparent hover:text-gold transition"
          >
            Shop Now
          </a>

          <a
            href="#about"
            className="border-2 border-white/40 text-white font-semibold uppercase text-sm px-8 py-3 rounded-btn hover:border-gold hover:text-gold transition"
          >
            Our Story
          </a>
        </div>

      </div>
    </section>
  )
}