import React from 'react';
import Styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <h6>Pagina creada por fan y sin fines de lucro</h6>
      <a href='https://www.pokemon.com/es'>Sitio oficial de pokemon</a>
    </div>
  );
};

export default Footer;
