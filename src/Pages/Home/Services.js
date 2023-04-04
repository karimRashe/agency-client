import React from 'react';
import service1 from '../../assets/images/icons/service1.png'
import service2 from '../../assets/images/icons/service2.png'
import service3 from '../../assets/images/icons/service3.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: service1
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: service2
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: service3
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-12'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;