import React, { createContext } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import { useState } from 'react';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute'
import Form from './Components/Form/Form/Form';

import Review from './Components/Form/Review/Review';
import ServiceList from './Components/Form/ServiceList/ServiceList';
import Admin from './Components/Adimin/Admin/Admin';
import AddServic from './Components/Adimin/AddService/AddServic';




export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
      <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/service">
         <ServiceList></ServiceList>
          </Route>
          <Route path="/admin">
         <Admin></Admin>
          </Route>
          <Route path="/addService">
        <AddServic></AddServic>
          </Route>
          <Route path="/review">
         <Review></Review>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/forms/:name/:text">
            <Form></Form>
          
          </PrivateRoute>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
