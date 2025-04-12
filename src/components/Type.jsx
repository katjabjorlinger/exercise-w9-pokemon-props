// Destructure pokemon types props here :)
export const Type = ({pokemon}) => {
  
  return (
    <ul> {pokemon.map((pokemon, index) => (
    <li key={index}>{pokemon.types}</li>
  ))}
  </ul>
  );
};

