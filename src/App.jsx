import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Conponets/Navbar/Navbar";
import CartModal from "./Conponets/cart/CartModal";
import ItemListContainer from "./Conponets/ItemListContainer";
import ItemDetailContainer from "./Conponets/ItemDetailContainer";
import './App.css'; 

// productos
const products = [
  { id: 1, name: "Pc Gamer Pink", price: 20000, image: "../public/imagenPc.avif", description: "Una PC Gamer rosa con gran rendimiento para juegos y diseño." },
  { id: 2, name: "Pc gamer White", price: 30000, image: "../public/imgpc2.avif", description: "PC Gamer blanca con potentes especificaciones para un excelente rendimiento." },
  { id: 3, name: "Pc gamer Monitor pink", price: 50000, image: "../public/imgpc3.avif", description: "Monitor y PC Gamer rosa con diseño elegante y alto desempeño." },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isProductModalOpen, setIsProductModalOpen] = useState(false); 

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} toggleCart={toggleCart} />

        <Routes>
          <Route path="/" element={<ItemListContainer products={products} addToCart={addToCart} openProductModal={openProductModal} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer products={products} addToCart={addToCart} openProductModal={openProductModal} />} />
          <Route path="/item/:id" element={<ItemDetailContainer products={products} />} />
        </Routes>

        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          calculateTotal={calculateTotal}
          isOpen={isCartOpen}
          toggleCart={toggleCart}
        />

        {isProductModalOpen && selectedProduct && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeProductModal}>&times;</span>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
              <p>Precio: ${selectedProduct.price}</p>
              <button onClick={closeProductModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
