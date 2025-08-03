import { useState } from 'react'
import '../styles/Navbar.css'
import { TfiMenuAlt } from "react-icons/tfi"
import { ImSearch } from "react-icons/im"
import { useName } from '../context/nameContext'

interface NavBarProps {
  search: string
  setSearch: (value: string) => void
  searchPokemon: () => void
  setShowTypes: (value: boolean) => void
}

function NavBar({ search, setSearch, searchPokemon, setShowTypes }: NavBarProps) {
  const { name, cleanName } = useName()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchPokemon()
  }

  const handleTypeClick = () => {
    setShowTypes(true)
    closeMenu()
  }

  return (
    <header className="navbar">
      {name && (
        <nav className="navbar__container">
          <div className="navbar__top">
            <div className="navbar__logo">
              <h1>Pokédex</h1>
            </div>
            <div className="navbar__menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
              <TfiMenuAlt />
            </div>
          </div>

          <ul className={`navbar__links ${isMenuOpen ? 'active' : ''}`}>
            <li><button className="navbar__btn" onClick={closeMenu}>✕</button></li>
            <li><button className="navbar__link" onClick={cleanName}> Home</button></li>
            <li><button className="navbar__link" onClick={closeMenu}> Start</button></li>
            <li className="navbar__dropdown">
              <button className="navbar__link"> Pokémons</button>
              <ul className="navbar__submenu">
                <li><button onClick={handleTypeClick}> Pokémons Type</button></li>
              </ul>
            </li>
          </ul>

          <form className="navbar__search" onSubmit={handleSearchSubmit}>
            <div className="navbar__search-icon">
              <ImSearch />
            </div>
            <input
              className="navbar__input"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Pokémon..."
              aria-label="Search Pokémon"
            />
          </form>
        </nav>
      )}
    </header>
  )
}

export default NavBar
