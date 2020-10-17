import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Adimin/Sidebar/Sidebar';
import Orderlist from '../orderlist/Orderlist';
import orderlist from '../orderlist/Orderlist';

const Admin = () => {
const [selectedOrder,setSelectedOrder] = useState([])

    useEffect(() => {   fetch('http://localhost:5000/allOrder')
.then(res=> res.json())
.then(data=> {
    setSelectedOrder(data)
})}
  ,[])
    return (
        <section className="container-fluid row">
     
<Sidebar></Sidebar>
          
 <div className="col-md-10 p-2 row">
     </div > <table className="table table-borderless ">
        <thead>
            <tr>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Email</th>
            <th className="text-secondary" scope="col">Order</th>
            <th className="text-secondary" scope="col">Project Detail</th>
            </tr>
        </thead>
        </table>
               {
                   selectedOrder.map(order => <Orderlist select={order}></Orderlist>)
               }
        </section>
    );
};

export default Admin;