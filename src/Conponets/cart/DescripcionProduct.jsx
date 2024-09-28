import React from 'react'

const Descripcion = ({ isOpen, toggleCart }) => {
    if (!isOpen) return null;
  
    return (
      <div className="cart-modal-overlay" onClick={toggleCart}>
        <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
          <h2>Descripcion</h2>
          <h3>PC: ${calculateTotal()}</h3>
          <button onClick={toggleCart}>Cerrar</button>
        </div>
      </div>
    );
  };

export default DescripcionProduct
