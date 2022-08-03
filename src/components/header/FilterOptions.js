import "../pokemonTypes.css"

const FilterOptions = ({ pokemonTypes, changeFilter }) => {
    const filterElements = pokemonTypes.map((type, i) => (
        <button
            key={i}
            className={`header__filters-btn type-${type.toLowerCase()}`}
            onClick={() => changeFilter(type)}
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