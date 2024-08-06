import React, { useEffect, useRef, useState } from 'react';
import img1 from '../assets/FLYER-TIENTA.png';
import img2 from '../assets/FLYER-TIENDA.png';
import './slider.css';

const SliderComponent = () => {
  const sliderRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const widthImg = 100 / 2; 

  useEffect(() => {
    const slider = sliderRef.current;
    const btnLeft = document.querySelector(".s-btn-left");
    const btnRight = document.querySelector(".s-btn-right");

    const moveToLeft = () => {
      setCounter((prevCounter) => (prevCounter === 0 ? 1 : 0));
    };

    const moveToRight = () => {
      setCounter((prevCounter) => (prevCounter === 1 ? 0 : 1));
    };

    const interval = setInterval(() => {
      moveToRight();
    }, 4000);

    btnLeft.addEventListener("click", moveToLeft);
    btnRight.addEventListener("click", moveToRight);

    return () => {
      clearInterval(interval);
      btnLeft.removeEventListener("click", moveToLeft);
      btnRight.removeEventListener("click", moveToRight);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    const operacion = counter * widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
  }, [counter, widthImg]);

  return (
    <div className="s-container-carousel">
      <div className="s-carruseles" ref={sliderRef}>
        <section className="s-slider-section">
          <img src={img1} alt="Slide 1" />
        </section>
        <section className="s-slider-section">
          <img src={img2} alt="Slide 2" />
        </section>
      </div>
      <div className="s-btn-left"><i className='bx bx-chevron-left'></i></div>
      <div className="s-btn-right"><i className='bx bx-chevron-right'></i></div>
    </div>
  );
}

export default SliderComponent;
