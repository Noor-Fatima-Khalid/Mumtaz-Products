import "./Hero.css";
import heroImg from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__media">
        {/* Image */}
        <img src={heroImg} alt="Mumtaz Products" className="hero__img" />
      </div>
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="section-eyebrow hero__eyebrow">
          Straight from the source
        </p>

        <h1 className="hero__heading">
          Pure. Pressed.<br />
          <em>Purposeful.</em>
        </h1>

        <p className="hero__sub">
          Cold-pressed oils, stone-ground attas, and heritage grains. Crafted without compromise.
        </p>

        <div className="hero__ctas">
          <a href="#best-sellers" className="gold-btn">Shop Now</a>
          <a href="#about" className="hero__ghost-btn">Our Story</a>
        </div>
      </div>
    </section>
  );
}

/*
Example video usage:
                  <video
          autoPlay
          muted
          loop
          playsInline
          className="hero__video"
          poster="/assets/hero.jpg"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
*/