import { Fragment, useState, useEffect } from 'react'
import { Input } from "@nextui-org/react";
import { useCar } from '../../context/carritoContext.js';


export default function ShoppingCartPage() {
  const [open, setOpen] = useState(true)
  const { carProduct, updateProductQuantity, total } = useCar()
  useEffect(() => {
   
    console.log('El carrito ha cambiado:', carProduct);
  }, [carProduct]); 
  return (
    <div className="max-w-full overflow-hidden">
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {carProduct.map((product) => (
              <li key={product.id_product} className="flex py-6 px-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.images[0].src}
                    alt={product.images.src}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <Input
                        isRequired
                        type="number"
                        label="Quantity"
                        defaultValue="1"
                        className="max-w-xs"
                        onChange={(e) => updateProductQuantity(product.id_product, parseInt(e.target.value))}
                      />
                      <p className="ml-4">${product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {product.quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => setOpen(false)}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
