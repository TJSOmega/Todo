import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo-connected.js';

import LoginContext from './components/auth/context.js'
import Login from './components/auth/Login.js';



 function App () {

  
    return (
      <>
      <LoginContext>
        <Login />
        <ToDo />
      </LoginContext>
        
      </>
    );
}

export default App;
