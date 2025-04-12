

export const Pokemon = ({pokemon}) => {

  return (
    <ul> {pokemon.map((pokemon, index) => 
      (<li key={index}>{pokemon.name}</li>

      ))}
      </ul>);
      
};
