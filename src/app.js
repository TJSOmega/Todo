import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo-connected.js';

 function App () {
    return (
      <>
        <ToDo />
      </>
    );
}

export default App;
