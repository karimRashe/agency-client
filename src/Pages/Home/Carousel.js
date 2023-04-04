import React from 'react';

import carousel1 from '../../assets/images/carousel-1.png';
import carousel2 from '../../assets/images/carousel-2.png';
import carousel3 from '../../assets/images/carousel-3.png';
import carousel4 from '../../assets/images/carousel-4.png';
import carousel5 from '../../assets/images/carousel-5.png';



const Carousel = () => {


    return (
     
    <div className=' bg-primary py-24 p-24  '>
     <h3 className=' text-4xl font-bold uppercase text-center text-white' >Here are some of our works</h3>
      <div class="carousel carousel-end  max-w-7xl mx-auto py-24">
  <div class="carousel-item w-72 bg-white \">
    <img src={carousel1} alt="Drink" />
  </div> 
  <div class="carousel-item w-72 bg-white \">
    <img src={carousel2} alt="Drink" />
  </div> 
  <div class="carousel-item w-72 bg-white \">
    <img src={carousel3} alt="Drink" />
  </div> 
  <div class="carousel-item w-72 bg-white \">
    <img src={carousel4} alt="Drink" />
  </div> 
  <div class="carousel-item w-72 bg-white \">
    <img src={carousel5} alt="Drink" />
  </div> 
  <div class="carousel-item w-72 bg-white shadow rounded">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
  </div> 
  
</div>
    </div>
    );
};

export default Carousel;