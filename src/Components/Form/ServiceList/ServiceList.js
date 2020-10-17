import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import ServiceListItem from '../ServiceListItem/ServiceListItem';
import SideBar from '../SideBar/SideBar';

const ServiceList = () => {
    const [selectOrder,setSelectedOrder] = useState([]);
 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 console.log(loggedInUser)

useEffect(() => {   fetch('http://localhost:5000/selectedOrder?email='+loggedInUser.email)
.then(res=> res.json())
.then(data=> {
    setSelectedOrder(data)
})}
  ,[])
// console.log(selectOrder);


    // useEffect(() => {
    //     fetch('http://localhost:5000/selectedOrder?email='+loggedInUser.email,{
    //         method:'GET',
    //         headers:{
    //             'Content-Type': 'application/js',
    //             authorization:`Bearer ${sessionStorage.getItem('token')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {console.log(data)})
    // },[])
console.log(selectOrder);
    return (
        <div className='row'>

        <div className="col-md-4 mt-5">
        <div  className="pb-5"> 
<img src="https://i.imgur.com/eST7UYb.png/150x50?text=Log" style={{ height: '47px', width: '150px' }} alt="" />

</div>
<div>  <SideBar className="mt-5"></SideBar></div>
</div>
<div className="col-md-6 ">

    <div className="row">

    {
    selectOrder.map(select =>  <ServiceListItem select={select} key={select._id}></ServiceListItem>
                
   )
}
    </div>

</div>
</div>
    );
};

export default ServiceList;