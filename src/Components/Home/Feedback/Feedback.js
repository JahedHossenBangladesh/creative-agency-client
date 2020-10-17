import React, { useEffect } from 'react';
import { useState } from 'react';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';
const feedback=[
    {
        img:'https://i.imgur.com/Ek0S1Rt.png',
        name:'Nash Patrik',
        rank:'CEO, Manpol',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        img:'https://i.imgur.com/gvRz9ul.png',
        name:'Miriam Barron',
        rank:'CEO, Manpol',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        img:'https://i.imgur.com/sZZALB4.png',
        name:'Bria Malone',
        rank:'CEO, Manpol',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    }
]
const Feedback = () => {
const [feedback,setFeedback] = useState([]);
useEffect(() =>{ 
    fetch('https://gentle-hollows-02853.herokuapp.com/getcomment')
    .then(res => res.json())
    .then(data => setFeedback(data))
},[])



    return (
        <div>
              <section className="my-5 py-5">
           <div className="container">
               <div className="section-header">
                  
                   <h1 className='text-center'><span style={{color: '#171B4E'}}>Clients  </span><span style={{color: '#7AB259'}}>Feedback</span></h1>
               </div>
               <div className="card-deck mt-5">
                    {
                      feedback.map(feedback => <FeedbackDetail feedback={feedback} key={feedback.name}/>)
                    }
                </div>
           </div>
       </section>
        </div>
    );
};

export default Feedback;