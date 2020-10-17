import React from 'react';
import'./HeaderMain.css'
const HeaderMain = () => {
    return (
        <div>
            <main style={{height:'600px'}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256',  textTransform: 'uppercase'}}>Lets grow your <br/> brand to  the<br/> next level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn" style={{backgroundColor:'#111430' ,color:'white'}} >Hire us</button>
            </div>
            <div className="col-md-6">
                <img src="https://i.imgur.com/nNhxjYH.png" alt="" className="img-fluid"/>
            </div>
        </main>
        </div>
    );
};

export default HeaderMain;