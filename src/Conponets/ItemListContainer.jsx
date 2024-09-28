import React from "react";
import { Link } from "react-router-dom";

const ItemListContainer = ({ products, addToCart, openProductModal }) => {
  return (
    <div className="product-list">
      <h2>Productos Disponibles</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
            <button><Link to={`/item/${product.id}`}>Ver Más</Link></button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
