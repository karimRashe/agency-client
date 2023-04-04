import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServicePortfali from './ServicePortfali';

const AvailablePortfali = ({date}) => {
    const [services, setServices] = useState([]);
      

    useEffect(() =>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
    <h4 className='text-xl text-center'>Available Service on:{format(date,'PP')}</h4>
    <div>
        {
            services.map(service=><ServicePortfali
              key={service._id}
              service={service}
                ></ServicePortfali>)
        }
    </div>
        </div>
    );
};

export default AvailablePortfali;