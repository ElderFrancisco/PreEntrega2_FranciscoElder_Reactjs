import React from 'react';
import styles from './contacto.module.scss';
import { useState } from 'react';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      <form>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='asunto'>Asunto</label>
        <input
          type='text'
          id='asunto'
          name='asunto'
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
        />
        <label htmlFor='mensaje'>Mensaje</label>
        <textarea
          id='mensaje'
          name='mensaje'
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
