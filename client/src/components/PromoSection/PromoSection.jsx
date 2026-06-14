import './PromoSection.css'

export default function PromoSection() {
  return (
    <section className="promo-section" aria-label="Promotion">
      <div className="promo-section__inner">
        <p className="section-eyebrow">Our Promise</p>
        <h2 className="section-heading promo-section__heading">
          A Return to Authentic Living
        </h2>
        <p className="promo-section__body">
          Mumtaz Products is a movement to reconnect with our roots, restore trust in our food, 
          and revive the simplicity of traditional living. Pure, honest, and uncompromised.
        </p>
        <a href="/shop" className="gold-btn">Shop Now</a>
      </div>
    </section>
  )
}