import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../../App';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      history.push("/form")
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });

    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }
console.log(loggedInUser)

  }
  return (
    <div className="login-page container row">
      <div className="col-md-3"></div>

      <div className=" col-md-6">

        <div className="from-group mt-5 text-center">
                               <div> 
                                 <a className="navbar-brand newBrand" href="#">
                                <img src="https://i.imgur.com/eST7UYb.png/150x50?text=Log" style={{ height: '47px', width: '150px' }} alt="" />
                                  </a> 
                                 </div>
                                 <div className="border border-secondary" style={{height:'400px'}} >
                                   <h3 style={{marginTop:'50px'}}>Login with</h3>
                                 <button className="btn btn-brand mt-5" onClick={handleGoogleSignIn}><i class="fab fa-google" ></i> <span className="pl-5">Google Sign in</span></button>
                                 <p><small>Dont have an account? </small> <span className='text-primary'><a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">create an account</a></span></p>
                                 </div>
          
                                                                                   </div>
                                                                                      </div>
      <div className="col-md-3"></div>


    </div>
  );
};

export default Login;