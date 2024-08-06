import React, { useState } from 'react';
import Notification from '../components/notification.js';
import { Pagination } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useCar } from '../context/carritoContext.js';

export default function ElementsInGrid({ products, title }) {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const { addCardProduct } = useCar()
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const pagination = [];
  for (let i = 1; i <= totalPages; i++) {
    pagination.push(
      <button key={i} onClick={() => setCurrentPage(i)}>
        {i}
      </button>
    );
  }

  const handleAddToCart = (id_prod) => {
    addCardProduct(id_prod);
    setNotificationMessage('Producto agregado al carrito!');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // La notificación se oculta después de 3 segundos
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <div key={product.id_product} className="group relative">

              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link to={`/${product.Tienda.name}/products/${product.id_product}`}>
                  <img
                    src={product.images[0].src}
                    alt={product.images.src}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.colors[0].name}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>

              </div>
              <button
                type="submit"
                className="bg-fuchsia-600 text-white px-3 py-1 rounded-md hover:bg-gray-600"
                onClick={() => handleAddToCart(product.id_product)}
              >
                Add To Car
              </button>
              <Notification
                message={notificationMessage}
                show={showNotification}
                onClose={() => setShowNotification(false)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="Pagination">
        <Pagination className="flex justify-center" showControls total={totalPages} initialPage={1} onChange={handlePageChange} />
      </div>
    </div>
  );
}
