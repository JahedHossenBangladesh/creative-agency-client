import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import'./Navbar.css';
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark  static-top">
  <div className="container">
    <a className="navbar-brand newBrand" href="#">
        <img src="https://i.imgur.com/eST7UYb.png/150x50?text=Log"  style={{height:'47px' ,width:'150px'}}alt=""/>
        </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active p-3">
          <a className="nav-link text-dark active hoverColor" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
              {/* <Link to="/home" className="nav-link mr-5 active">Home</Link> */}
              {/* navbar-light .navbar-nav .nav-link.active {
    border-bottom: 3px solid #7AB259;
    font-weight: bold;
} */}
        </li>
        <li className="nav-item p-3">
          <a className="nav-link text-dark hoverColor" href="#">About</a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link text-dark hoverColor " href="#">Services</a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link text-dark hoverColor" href="#">Contact</a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link text-dark hoverColor" href="#"> <Link to='/admin'>Admin</Link>   </a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link text-dark hoverColor" href="#"> <button onClick={() => setLoggedInUser({})} style={{border:"none",backgroundColor:"golden"}}>Sign out</button></a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link text-dark hoverColor" href="#"> <Link to='/login'>Login</Link>   </a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
</div>
    );
};

export default Navbar;