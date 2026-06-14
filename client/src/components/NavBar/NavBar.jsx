import { useState, useEffect, useRef } from 'react'
import { Search, ShoppingCart, User, X, Leaf } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled]     = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus()
  }, [searchOpen])

  const handleSearchToggle = () => {
    setSearchOpen(prev => !prev)
    if (searchOpen) setSearchQuery('')
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo" aria-label="Mumtaz Products — Home">
          <Leaf className="navbar__logo-icon" size={22} />
          <span className="navbar__logo-text">Mumtaz<span className="navbar__logo-accent"> Products</span></span>
        </a>

        {/* Right icons */}
        <nav className="navbar__actions" aria-label="Site actions">
          {/* Search — expands inline */}
          <div className={`navbar__search-wrap${searchOpen ? ' navbar__search-wrap--open' : ''}`}>
            {searchOpen && (
              <input
                ref={searchRef}
                className="navbar__search-input"
                type="search"
                placeholder="Search products…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Escape' && handleSearchToggle()}
                aria-label="Search products"
              />
            )}
            <button
              className="navbar__icon-btn"
              onClick={handleSearchToggle}
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              title={searchOpen ? 'Close search' : 'Search products'}
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>

          {/* Cart */}
          <button
            className="navbar__icon-btn navbar__cart-btn"
            aria-label="Shopping cart"
            title="View cart"
          >
            <ShoppingCart size={20} />
            <span className="navbar__cart-badge" aria-label="0 items in cart">0</span>
          </button>

          {/* Profile */}
          <button
            className="navbar__icon-btn"
            aria-label="Account"
            title="Your account"
          >
            <User size={20} />
          </button>
        </nav>
      </div>
    </header>
  )
}