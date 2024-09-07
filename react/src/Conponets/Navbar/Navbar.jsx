import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <header className="header">
        <a href="" className="logo">NexusGaming</a>
        <nav className="navbar">
            <a href="">Inicio</a>
            <a href="">Equipos</a>
            <a href="">Servicio</a>
            <a href="">Contacto</a>
            <a href="#" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
            </a>
           

        </nav>
    </header>
  )
}

export default Navbar