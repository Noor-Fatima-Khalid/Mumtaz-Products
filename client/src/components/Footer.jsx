import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white mt-5 py-8 px-5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">

        {/* Copyright */}
        <p className="text-sm text-white/80">
          © 2026, Mumtaz Products
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-5">
          
          <a
            href="/privacy-policy"
            className="text-sm text-white/80 hover:text-white hover:underline transition"
          >
            Privacy policy
          </a>

          <a
            href="/shipping-policy"
            className="text-sm text-white/80 hover:text-white hover:underline transition"
          >
            Shipping policy
          </a>

          <Link
            to="/contact"
            className="text-sm text-white/80 hover:text-white hover:underline transition"
          >
            Contact Information
          </Link>

          <a
            href="/refund-policy"
            className="text-sm text-white/80 hover:text-white hover:underline transition"
          >
            Refund policy
          </a>

        </div>
      </div>
    </footer>
  )
}