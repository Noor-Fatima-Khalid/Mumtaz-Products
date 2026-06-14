import './AboutUs.css'

export default function AboutUs() {
  return (
    <section id="about" className="about-section" aria-label="About Us">
      <div className="about-section__inner">
        {/* Text — left side */}
        <div className="about-section__text">
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-heading">Rooted in Tradition,<br />Built for Today</h2>
          <p className="about-section__body">
            At Mumtaz Products, we believe that purity is not just a promise, it's a way of life. From stone-ground Chakki Atta 
            and nutrient-rich Multigrain flour to cold-pressed oils, ghee, and natural dates, our range is rooted in tradition 
            yet crafted for modern lifestyles. Every product reflects our commitment to authenticity, quality, and health. We 
            are here to reconnect families with food that is wholesome, natural, and true to its origin.
          </p>
          <a href="/products" className="gold-btn" style={{ marginTop: '8px' }}>Our Products</a>
        </div>

        {/* Image — right side */}
        <div className="about-section__media">
          <div className="about-section__img-frame">
            {/* Replace src with your actual image */}
            <img
              src="https://placehold.co/560x480/1C3A2F/C9A84C?text=About+Mumtaz"
              alt="Mumtaz Products — our story"
              className="about-section__img"
            />
            <div className="about-section__img-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}