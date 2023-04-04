import React from 'react';
import frame from '../../assets/images/logos/Frame.png';
import './Banner.css'

const Banner = () => {
    return (
    <div >
          <div    className="hero min-h-screen bg-secondary   ">
      <div className="hero-content flex-col lg:flex-row-reverse mb-10">
          <img  src={frame} className="max-w-sm rounded-lg shadow-2xl " alt=""/>
          <div>
              <h1 className="text-3xl font-bold">Let’s Grow Your 
           
                                  Brand To Thes
                                 
                                Next Level!</h1>
              <p className="py-6">Lorem ipsum dolor sit amet, consectetur<br/>
             adipiscing elit. Purus commodo ipsum duis<br/>
              laoreet maecenas. Feugiat  </p>
              <button className="btn btn-primary">Get Started</button>
          </div>
      </div>
  </div>
    </div>
    );
};

export default Banner;