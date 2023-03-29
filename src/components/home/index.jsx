import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.containerHomeBase}>
      <div className={styles.containerHome1}>
        <h2>¡Bienvenido a Pokemon!</h2>
        <p>sentite comodo de explorar por nuestra pagina</p>
        <p>si queres ver algun pokemon sigue el link</p>
        <Link to={'/pokemon'} className={styles.link}>
          Dirigeme alla
        </Link>
      </div>
      <div className={styles.containerHome2}>
        <div className={styles.separadorIz}>
          <h2>¿Que es Pokemon?</h2>
          <p>
            Pokémon es una franquicia de videojuegos, animación y productos
            relacionados que gira en torno a un mundo ficticio poblado por
            criaturas llamadas Pokémon. En el juego, los jugadores asumen el
            papel de entrenadores Pokémon y buscan capturar, entrenar y batallar
            con sus Pokémon para convertirse en el mejor entrenador Pokémon del
            mundo. Cada Pokémon tiene habilidades únicas y pertenece a uno o más
            tipos, como fuego, agua o hierba, que influyen en su fuerza y
            debilidades en las batallas. La franquicia se ha expandido a lo
            largo de los años y ahora incluye una variedad de medios, incluyendo
            videojuegos, series de televisión, películas y una amplia gama de
            mercancías.
          </p>
        </div>
        <div className='separadorDe'>
          <iframe
            width='640 '
            height='360'
            src='https://www.youtube.com/embed/ymFxepbBSvQ'
            title='La Historia de Pokémon'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className={styles.containerHome3}>
        <h2>¿Necesitas ayuda?</h2>
        <p>Ponte en contacto con nosotros</p>
        <Link to={'/contacto'} className={styles.link}>
          Dirigeme alla
        </Link>
      </div>
    </div>
  );
};

export default Home;
