import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
 const onSubmit = dataa =>{
    console.log(dataa);

   
       const newComment ={...loggedInUser,dataa}
       fetch('https://gentle-hollows-02853.herokuapp.com/comment',{
         method:'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(newComment)
       })
       .then(res => res.json())
       .then(data => {
         console.log(data);
       })

}
console.log(loggedInUser)
    return (
        <div className='row'>
        <div className="col-md-4 mt-5">
        <div  className="pb-5"> 
<img src="https://i.imgur.com/eST7UYb.png/150x50?text=Log" style={{ height: '47px', width: '150px' }} alt="" />

</div>
<div>  <SideBar className="mt-5"></SideBar></div>
</div>
<div className="col-md-6">
<form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <h2>Order</h2>
                    <div className="form-group" >
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" className="form-control"/>
        {errors.name && <span className="error">Name is required</span>}

                    </div>
                    
                   
                    <div className="form-group">  
                      <input name="company" type='text' ref={register({ required: true })}  placeholder="company name" />
        {errors.company && <span className="error">order name is required</span>}
                     </div>
                     
                        <div className="form-group">
                    <input name="comment" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="project-detail" className="form-control" style={{height:'200px'}}/>
        {errors.comment && <span className="error">comment is required</span>}

                    </div>

                    <div className="form-group ">
                    <input type="submit"  value='send' style={{backgroundColor:'#111430' ,color:'white'}} className='ml' /> 
                    </div>
                </form>
</div>
</div>
    );
};

export default Review;