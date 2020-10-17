import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
    
            <div>
                <ul style={{listStyleType:'none'}}>
                <Link to="/admin" className="nav-link mr-5 active"><li><i class="fas fa-shopping-cart"></i> Service List</li></Link>
                <Link to="/addService" className="nav-link mr-5 active"> <li><i class="fas fa-shopping-bag"></i> Add service</li></Link>
                <Link to="" className="nav-link mr-5 active"> <li><i class="far fa-comment-dots"></i> set Admin</li></Link>
                    
                </ul>
            </div>
    );
};

export default Sidebar;