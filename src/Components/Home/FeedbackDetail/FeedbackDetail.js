import React from 'react';

const FeedbackDetail = ({feedback}) => {
    return (
        <div className="card shadow-sm">
<div className="card-footer d-flex  align-items-center">
            <img className="mx-3" src={feedback.img} alt=" this is img" width="60"/>
            <div>
                <h6 className="text-primary">{feedback.name}</h6>
                <p className="m-0">{feedback.company}</p>
            </div>
        </div>


        <div className="card-body">
            <p className="card-text text-center">{feedback.comment}</p>
        </div>
        
   </div>
    );
};

export default FeedbackDetail;