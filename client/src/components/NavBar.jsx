import { useState, useEffect, useRef } from "react"
import { Search, ShoppingCart, User, X, Leaf } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus()
  }, [searchOpen])

  const handleSearchToggle = () => {
    setSearchOpen(prev => !prev)
    if (searchOpen) setSearchQuery("")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-green-dark transition-shadow ${
        scrolled ? "shadow-hover" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <Leaf className="text-gold" size={22} />
          <span className="text-white font-bold text-xl tracking-wide font-display">
            Mumtaz <span className="text-gold">Products</span>
          </span>
        </Link>

        {/* Actions */}
        <nav className="flex items-center gap-3">

          {/* Shop */}
          <Link
            to="/shop"
            className="text-gold font-semibold text-sm relative px-1
            after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:h-[1px] after:w-0 after:bg-gold
            hover:after:w-full after:transition-all"
          >
            Shop
          </Link>

          {/* Search */}
          <div
            className={`flex items-center transition-all duration-300 rounded-full ${
              searchOpen ? "bg-white/10 pl-4" : ""
            }`}
          >
            {searchOpen && (
              <input
                ref={searchRef}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === "Escape" && handleSearchToggle()}
                placeholder="Search products…"
                className="bg-transparent outline-none text-white text-sm w-[200px] sm:w-[130px] font-body"
              />
            )}

            <button
              onClick={handleSearchToggle}
              className="w-11 h-11 flex items-center justify-center text-gold rounded-full
              hover:bg-gold/10 hover:scale-105 active:scale-95 transition"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative w-11 h-11 flex items-center justify-center text-gold rounded-full
            hover:bg-gold/10 hover:scale-105 active:scale-95 transition"
          >
            <ShoppingCart size={20} />
            <span className="absolute top-1 right-1 bg-gold text-green-dark
            text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          {/* User */}
          <Link
            to="/login"
            className="w-11 h-11 flex items-center justify-center text-gold rounded-full
            hover:bg-gold/10 hover:scale-105 active:scale-95 transition"
          >
            <User size={20} />
          </Link>

        </nav>
      </div>
    </header>
  )
}