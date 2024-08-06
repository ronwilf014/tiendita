import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoresProvider } from './context/tiendasContext';
import { HomePage, ProductListPage, ProductDetailPage, StoreListPage, NotFoundPage, StoreDetailPage,ShoppingCartPage } from './pages/index';
import { NextUIProvider } from "@nextui-org/react";



export default function App() {
  return (

    <NextUIProvider>
      <Router>
        <Header />
        <StoresProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/:tiendaName/products/:id" element={<ProductDetailPage />} />
            <Route path="/store-list" element={<StoreListPage />} />
            <Route path="/store-detail/:id" element={<StoreDetailPage />} />
            <Route path="/carrito" element={<ShoppingCartPage/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </StoresProvider>
      </Router>
    </NextUIProvider>

  )
}


