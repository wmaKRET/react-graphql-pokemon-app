import "../pokemonTypes.css"

const FilterOptions = ({ pokemonTypes }) => {
    const filterElements = pokemonTypes.map((type, i) => (
        <button
            key={i}
            className={`header__filters-btn type-${type.toLowerCase()}`}
        >
            {type}
        </button>
    ))

    return (
        <div className="header__filters">
            {filterElements}
        </div>
    )
}

export default FilterOptions