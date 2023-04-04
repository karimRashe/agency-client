import React from 'react';

const InfoCard = ({img}) => {
    return (
        <div className='card lg:card-side ml-20 items-center py-10 pb-10'>
            <figure >
                <img  src={img} alt="Album" />
            </figure>
            
        </div>
    );
};

export default InfoCard;