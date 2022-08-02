const Pokemon = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <div className="pokemon">
        <h2>{pokemon.name}</h2>
    </div>
  )
}

export default Pokemon