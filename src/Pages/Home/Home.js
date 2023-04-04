import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Carousel from './Carousel';
import ClientsServices from './ClientsServices';
import Info from './Info';
import LastBanner from './LastBanner';
import Services from './Services';


const Home = () => {
    return (
        <div>
       <Banner></Banner>
       <Info></Info>
       <Services></Services>
       <Carousel></Carousel>
   <ClientsServices></ClientsServices>
   <LastBanner></LastBanner>
   <Footer></Footer>
        </div>
    );
};

export default Home;