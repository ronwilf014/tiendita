import React from 'react';
import './cardsSlider.css';
import { Link } from 'react-router-dom';


const CardsSlider = ({ items, title, imageKey }) => {
  
  let currentIndex = 0;

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
  };

  const prevSlide  = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider();
  };

  const updateSlider = () => {
    const sliderContent = document.querySelector(".slider-content");
    const cardWidth =
        document.querySelector(".review-card").offsetWidth + 20; // Adjusted width including margin
    sliderContent.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  };

  return (

      <> 
       <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">{title && <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>}</div>
       <div className="services_G slider-section">
        <div className="slider-container">
          <div className="container_cards_blog slider-content gap-x-6">
            {items.map((item, index) => (
              <Link key={item.id_tienda} to={`/store-detail/${item.id_tienda}`}>
              <div className="card_blog review-card rounded-md overflow-hidden rounded" key={index} onClick={() => {}}>
                <div className="img_card_blog">
                  <img src={item[imageKey]} alt="" />
                </div>
                <div className="text_card_blog">
                  {item.name}
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
      </>


  );
};

export default CardsSlider;
