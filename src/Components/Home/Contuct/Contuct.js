import React from 'react';

const Contuct = () => {
    return (
        <div className='row bg'>
            <div className="col-md-6 pt-5 pl-5">

<h2> Let us handle your <br/> project, professionally.</h2>
<p className="text-secondary pt-5">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>

            </div>
            <div className="col-md-6"> 
             <section className="contact my-5 py-5">
           <div className="container">
               {/* <div className="section-header text-center text-white mb-5">
                    
               </div> */}
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group ">
                           <button type="button" className="" style={{backgroundColor:'#111430' ,color:'white'}}> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section> 
       </div>
       <div className="copyRight text-center pl-5" >
                    <p style={{textAlign:'center'}}>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </div>
    );
};

export default Contuct;