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
    <div className={styles.pokemonDiv}>
      <div className={styles.pokemonContentDiv}>
        <h2 className={styles.h2}>Busca tu pokemon</h2>
        <input type='number' onChange={valorInput} className={styles.input} />
        <button onClick={() => addNumberToList(input)} className={styles.btn}>
          agrega un pokemon
        </button>
        <button onClick={() => setNumbers(vacio)} className={styles.btn}>
          Borrar pokemons
        </button>
      </div>
      <div className={styles.pokemonContainer}>
        {numbers.map((id) => (
          <PokemonCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
