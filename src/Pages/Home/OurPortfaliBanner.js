import React, { useState } from 'react';
import frame from '../../assets/images/logos/Frame.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const OurPortfaliBanner = ({date, setDate}) => {

  
    return (
      <div class="hero min-h-screen  bg-secondary ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={frame} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
        <div>
        <DayPicker 
        mode='single'
        selected={date}
        onSelect={setDate}
        />
      
         
        </div>
      </div>
     
    </div>
    );
};

export default OurPortfaliBanner;