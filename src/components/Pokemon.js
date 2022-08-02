const Pokemon = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="card__picture">
        <img
          className="card__image"
          src={pokemon.image}
          alt={pokemon.name}
        />
      </div>
      <h2 className="card__name">{pokemon.name}</h2>
      <div className="card__types">
        {pokemon.types.map((type, i) => (
          <p className={`type-${type.toLowerCase()}`} key={i}>{type}</p>
        ))}
      </div>
    </div>
  )
}

export default Pokemon