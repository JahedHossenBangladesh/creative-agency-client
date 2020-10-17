import React from 'react';
import'./OurWork.css';
import $ from 'jquery'; 

const OurWork = () => {
    
    $('.carousel-control-prev').click(function() {
        $('#myCarousel').carousel('prev');
      });
      
      $('.carousel-control-next').click(function() {
        $('#myCarousel').carousel('next');
      });


    return (
   

<div className="p-5" style={{ backgroundColor:'#111430',height:'700px',width:''}}> 
<h2 className='text-center text-light '>Here are some of  <span style={{color: '#7AB259'}}>our works</span></h2>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block img-fluid w-100 " src="https://i.imgur.com/4nSyW5u.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
    <img className="d-block img-fluid w-100 " src="https://i.imgur.com/QjHR4Um.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100  " src="https://i.imgur.com/QjHR4Um.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> 
 </div>


        
    );
};

export default OurWork;