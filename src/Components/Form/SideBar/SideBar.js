import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <ul style={{listStyleType:'none'}}>
            <Link to="/order" className="nav-link mr-5 active"><li><i class="fas fa-shopping-cart"></i> Order</li></Link>
            <Link to="/service" className="nav-link mr-5 active"> <li><i class="fas fa-shopping-bag"></i> Service list</li></Link>
            <Link to="/review" className="nav-link mr-5 active"> <li><i class="far fa-comment-dots"></i> Review</li></Link>
                
            </ul>
        </div>
    );
};

export default SideBar;