export const PokemonCard = ({pokemon}) => {
    return (
        <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem', borderRadius: '8px' }}>
        <h2>{pokemon.name} (#{pokemon.id})</h2>
        <p><strong>Category:</strong> {pokemon.category}</p>
        <p><strong>Height:</strong> {pokemon.height} m</p>
        <p><strong>Weight:</strong> {pokemon.weight} kg</p>
        <p><strong>Types:</strong> {pokemon.types.join(', ')}</p>
        <p><strong>Weaknesses:</strong> {pokemon.weeknesses.join(', ')}</p>
      </div>
    );
};