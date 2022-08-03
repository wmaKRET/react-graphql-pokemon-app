import { useState } from "react"
import FilterOptions from "./FilterOptions"
import "./header.css"

const Header = ({ pokemonTypes }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <header className="header">
      <div className="header__menu">
        <p className="header__title">Pokedex</p>
        <button>
          Filters
        </button>
        <a className="header__link" href="https://github.com/wmaKRET" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <FilterOptions pokemonTypes={pokemonTypes}/>
    </header>
  )
}

export default Header