import React from 'react';
import InfoCard from './InfoCard';
import slack from '../../assets/images/logos/slack.png'
import google from '../../assets/images/logos/google.png'
import uber from '../../assets/images/logos/uber.png'
import netflix from '../../assets/images/logos/netflix.png'
import airbnb from '../../assets/images/logos/airbnb.png'

const Info = () => {
    return (
      <div className=''>
          <div className='grid grid-cols-1 lg:grid-cols-6 gap-7 ml-12 px-10 '>
        <InfoCard   img={slack}></InfoCard>
        <InfoCard   img={google}></InfoCard>
        <InfoCard  img={uber}></InfoCard>
        <InfoCard   img={netflix}></InfoCard>
        <InfoCard  img={airbnb}></InfoCard>
    </div>
      </div>
       
    );
};

export default Info;