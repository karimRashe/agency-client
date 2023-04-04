import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AvailablePortfali from './AvailablePortfali';
import OurPortfaliBanner from './OurPortfaliBanner';

const OurPortfali = () => {
  const [date, setDate] = useState(new Date());
    return (
        <div className='bg-secondary '>
        
     
          <OurPortfaliBanner date={date} setDate={setDate}></OurPortfaliBanner>
          <AvailablePortfali date={date}></AvailablePortfali>
          <Footer></Footer>
      
        </div>
    );
};

export default OurPortfali;