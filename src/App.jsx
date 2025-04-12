/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */


import data from './data.json'
import { Pokemon } from './components/Pokemon';
import { Type } from './components/Type';
import { PokemonCard } from './components/PokemonCard';

export const App = () => {
  return (
    <div className="App">
      <h2>Names</h2>
      <Pokemon pokemon={data.pokemons}/>
      <h2>Types</h2>
      <Type pokemon={data.pokemons}/>

      <h1>My Pokédex</h1>

      {data.pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>


  );
};
