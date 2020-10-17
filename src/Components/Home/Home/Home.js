import React from 'react';
import Contuct from '../Contuct/Contuct';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar'
import OurWork from '../OurWork/OurWork';
import Service from '../Service/Service';
import Sponcer from '../Sponcer/Sponcer';
const Home = () => {
    return (
        <div>
            <div className='bg'>
                <Header></Header>
            </div>
           <Sponcer></Sponcer>
           <Service></Service>
           <OurWork></OurWork>
           <Feedback></Feedback>
           <Contuct></Contuct>
                    </div>
    );
};

export default Home;