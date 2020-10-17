import React from 'react';

const ServiceListItem = (props) => {
    console.log(props.select)
const {name,text} =props.select;
    return (
        
                 <div className="col-md-3 text-center pb-5"  >
     
    <h5 className="mt-3 mb-3">{name}</h5>
<p className="text-secondary">{text}</p>

</div>
        
    );
};

export default ServiceListItem;