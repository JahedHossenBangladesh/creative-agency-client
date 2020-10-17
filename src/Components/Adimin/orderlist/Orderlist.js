import React from 'react';

const Orderlist = ({select}) => {
    return (
        <table className="table table-borderless col-md-12">
      
        <tr>
                    <td>{select.name}</td>
                    <td>{select.email}</td>
                    <td>{select.order}</td>
                    <td>{select.text}</td>
                </tr>
      
    </table>
    );
};

export default Orderlist;