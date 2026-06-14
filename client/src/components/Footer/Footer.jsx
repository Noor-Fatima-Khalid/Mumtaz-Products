import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <p className="footer__copyright">
          © 2026, Mumtaz Products
        </p>

        <div className="footer__links">
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/shipping-policy">Shipping policy</a>
          <a href="/contact">Contact information</a>
          <a href="/refund-policy">Refund policy</a>
        </div>

      </div>
    </footer>
  );
}