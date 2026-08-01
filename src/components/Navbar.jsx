import { useState } from 'react'

function Navbar({ theme, toggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['home', 'about', 'projects', 'skills', 'contact']

  return (
    <header className="navbar">
      <div className="container">
        <a href="#home" className="logo">Ahmad Imam</a>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className={activeSection === link ? 'active' : ''}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle color theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="container" style={{ paddingBottom: '1rem' }}>
          <nav className="nav-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {links.map((link) => (
              <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
