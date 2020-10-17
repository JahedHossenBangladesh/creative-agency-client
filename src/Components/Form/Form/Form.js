import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const Form = () => {
    const {name,text,img} = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 const onSubmit = dataa =>{
     console.log(dataa);
     dataa.name =name;
     dataa.text =text;
    
        // const newEvent ={...loggedInUser,name,text}
        fetch('http://localhost:5000/addOrder',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(dataa)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })

 }


    return (
        <div className='row'>
            <div className="col-md-4 mt-5">
<div  className="pb-5"> 
<img src="https://i.imgur.com/eST7UYb.png/150x50?text=Log" style={{ height: '47px', width: '150px' }} alt="" />

</div>
              <div>  <SideBar className="mt-5"></SideBar></div>
            </div>

            <div className="col-md-6 bg-light">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <h2>Order</h2>
                    <div className="form-group" >
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" className="form-control"/>
        {errors.name && <span className="error">Name is required</span>}

                    </div>
                    
                    <div className="form-group">
                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email" className="form-control" />
        {errors.email && <span className="error">Email is required</span>}
                    </div>
                    <div className="form-group">  
                      <input name="order" ref={register({ required: true })}  placeholder={name}  value={name}/>
        {errors.order && <span className="error">order name is required</span>}
                     </div>
                     <div className="form-group">
                        <input type="number"  ref={register({ required: true })} name="price" placeholder="price" className="form-control" />
                        {errors.price && <span className="text-danger">price is required</span>}
                        </div>
                        <div className="form-group">
                    <input name="project" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="project-detail" className="form-control" style={{height:'200px'}}/>
        {errors.project && <span className="error">project detail is required</span>}

                    </div>

                    <div className="form-group ">
                    <input type="submit"  value='send' style={{backgroundColor:'#111430' ,color:'white'}} className='ml' /> 
                    </div>
                </form>
            

                 </div>

        </div>
    );
};

export default Form;