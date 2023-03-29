import React from 'react';
import { useState } from 'react';
import PokemonCard from '../pokemonCard';
import styles from './pokemon.module.scss';

function Pokemon() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState({});
  const vacio = [];
  function valorInput(e) {
    setInput(e.target.value);
  }

  function addNumberToList(number) {
    if (number === '') {
      number = 1;
    } else {
      const updatedNumbers = [...numbers, number];
      setNumbers(updatedNumbers);
    }
  }

  return (
    <div>
      <input type='number' onChange={valorInput} />
      <button onClick={() => addNumberToList(input)}>agregar pokemon</button>
      <button onClick={() => setNumbers(vacio)}>Borrar pokemons</button>

      <div className={styles.pokemonContainer}>
        {numbers.map((id) => (
          <PokemonCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
