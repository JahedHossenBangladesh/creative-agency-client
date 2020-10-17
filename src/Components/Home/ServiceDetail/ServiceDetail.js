import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceDetail = (props) => {
    const {img,name,text} =props.service;

    const history = useHistory()
    const handleOrder = (name,text,img) => {
        history.push(`/forms/${name}/${text}/${img}`);
    }

    return (
        
            <div className="col-md-4 text-center pb-5"  >
                <button  onClick={() => handleOrder(props.service.name,props.service.text,props.service.img)}>     <img style={{height: '50px'}} src={img} alt="" />
            <h5 className="mt-3 mb-3">{name}</h5>
    <p className="text-secondary">{text}</p></button>
       
        </div>
        
    );
};

export default ServiceDetail;