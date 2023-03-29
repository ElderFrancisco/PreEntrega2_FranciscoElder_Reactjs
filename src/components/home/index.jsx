import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.containerHome}>
      <h2>¡Bienvenido a Pokemon!</h2>
      <p>sentite comodo de explorar por nuestra pagina</p>
      <p>si queres ver algun pokemon sigue el link</p>
      <Link to={'/pokemon'} className={styles.link}>
        Dirigeme alla
      </Link>
    </div>
  );
};

export default Home;
