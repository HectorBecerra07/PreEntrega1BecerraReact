import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ cart, toggleCart }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">NexusGaming</Link>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/category/equipos">Equipos</Link>
        <Link to="/category/servicio">Servicio</Link>
        <Link to="/category/contacto">Contacto</Link>
        <a href="#" className="cart-icon" onClick={toggleCart}>
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cart.length}</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
