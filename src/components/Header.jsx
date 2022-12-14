import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          {' '}
          {/* Aqui damos click y nos movemos a la seccion de checkout */}
          <i className="fas fa-shopping-basket fa-2x" />
        </Link>
        {/*Logica para mostrar cuantos productos hay en el carrito*/}
        {cart.length > 0 ? (
          <div className="Header-alert">{cart.length} Productos</div>
        ) : (
          <div className="Header-alert">{cart.lenght} Productos</div>
        )}
      </div>
    </div>
  );
};

export default Header;
