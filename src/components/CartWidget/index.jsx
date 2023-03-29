import React from 'react';
import cart4 from './cart4.svg';
import styles from './CartWidget.module.scss';

const CartWidget = ({ itemCount }) => {
  return (
    <div className={styles.cartWidget}>
      <img src={cart4} alt='cart' className={styles.cart} />
      {itemCount}
    </div>
  );
};

export default CartWidget;
