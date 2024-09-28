import React from "react";
import './CartModal.css'; 

const CartModal = ({ cart, removeFromCart, calculateTotal, isOpen, toggleCart }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={toggleCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={toggleCart}>Cerrar</button>
      </div>
    </div>
  );
};

export default CartModal;
