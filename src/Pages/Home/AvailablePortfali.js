import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServicePortfali from './ServicePortfali';

const AvailablePortfali = ({date}) => {


    const [services, setServices] = useState([]);
    const [book, setBook] = useState([null]);
      

    useEffect(() =>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className=''>
    <h4 className='text-xl text-center'>Available Service on:{format(date,'PP')}</h4>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8 px-12'>
        {
            services.map(service=><ServicePortfali
              key={service._id}
              service={service}
              setBook={setBook}
                ></ServicePortfali>)
        }
    </div>
                    {
                        book && <BookingModal book={book}></BookingModal>
                    }
        </div>
    );
};

export default AvailablePortfali;