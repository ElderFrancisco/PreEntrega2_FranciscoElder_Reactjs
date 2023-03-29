import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pokemon.module.scss';
import CartWidget from '../CartWidget';

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);

  if (!pokemon)
    return (
      <div className={styles.container}>
        <h2 className='pokemonName'>...Cargando</h2>
        <img className='pokemonImage' />
        <ul>
          <li>... </li>
          <li>... </li>
          <li>... </li>
        </ul>
        <input type='button' value='...Cargando' />
      </div>
    );

  return (
    <div className={styles.container}>
      <h2 className='pokemonName'>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className='pokemonImage'
      />
      <ul>
        <li>Height: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
        <li>Base experience: {pokemon.base_experience}</li>
      </ul>
      <input type='button' value='comprar' />
    </div>
  );
}

export default PokemonCard;
