import React from 'react';


const ServicePortfali = ({service, setBook}) => {
    const{name, price,description,img} = service;

    
    return (
        <div class="card lg:maax-w-lg   shadow-xl">
  <figure class="px-10 pt-10">
  
  <img class="w-24 h-24" src={img} alt="Shoes" className="rounded-xl" />
  
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
   
    <p>{description}</p>
    <h4>{price}</h4>
    <div class="card-actions">


      <label for="booking-modal"
       onClick={()=>setBook(service)}
      class="btn btn-primary text-white uppercase">BOOK SERVICE</label>
    </div>
  </div>
</div>
    );
};

export default ServicePortfali;