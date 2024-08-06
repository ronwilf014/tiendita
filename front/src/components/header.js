import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/rick-original.png';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/productsContext';

const Header = () => {
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const resultsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <header>
      <nav className="bg-cyan-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold">
              <img src={logo} alt="Logo de la empresa" className="w-20" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              <li><Link to="/" className="text-white hover:text-gray-300">Inicio</Link></li>
              <li><Link to="/product-list" className="text-white hover:text-gray-300">Productos</Link></li>
              <li><Link to="/store-list" className="text-white hover:text-gray-300">Tiendas</Link></li>
              <li><Link to="/carrito" className="text-white hover:text-gray-300"><span className="material-symbols-outlined text-white">shopping_cart_checkout</span></Link></li>
            </ul>
          </div>
          <div className="hidden md:block relative" ref={resultsRef}>
            <form action="#" method="GET">
              <div className="flex items-center border-gray-600 rounded-md">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Buscar productos"
                  className="py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  autoComplete="off"
                />
                <button type="submit" className="bg-fuchsia-600 text-white px-3 py-1 rounded-md hover:bg-gray-600">Buscar 1</button>
              </div>
            </form>
            {searchResults.length > 0 && (
              <ul className="absolute top-full left-0 z-40 bg-white border border-gray-200 mt-1 rounded-md overflow-hidden">
                {searchResults.map(result => (
                  
                  <li key={result.id_product}>
                    <Link to={`${result.Tienda.name}/products/${result.id_product}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setSearchResults([])}>{result.name}/{result.Tienda.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
