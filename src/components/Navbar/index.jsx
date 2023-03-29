import React from 'react';
import styles from './Navbar.module.scss';
import logo from './logo.png';
import CartWidget from '../CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <img src={logo} alt='' className='logo' />
      <ul>
        <li>
          <Link to={'/'}>home</Link>
        </li>
        <li>
          <Link to={'/pokemon'}>pokemons</Link>
        </li>
        <li>
          <Link to={'/contacto'}>contacto</Link>
        </li>
      </ul>
      <CartWidget className={styles.cart} itemCount={count} />
    </div>
  );
};

export default Navbar;
