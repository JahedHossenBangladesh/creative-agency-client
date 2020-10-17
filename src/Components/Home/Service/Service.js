import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const data =[
    {
        img:'https://i.imgur.com/mzimqNf.png',
name:'Web & Mobile design',
text:'We craft stunning and amazing web UI using a well drrafted UX to fit your product'
},
{
    img:'https://i.imgur.com/iIsb2wM.png',
    name:'Graphic design',
    text:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
},
{
    img:'https://i.imgur.com/KMMLJ6K.png',
    name:'Web development',
    text:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
 
}]
const Service = () => {
    return (
        <section className="services-container mt-5">
        <div className="text-center">
           
            <h2>Provide awesome <span style={{color: '#7AB259'}}>services </span></h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
            {
                data.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Service;