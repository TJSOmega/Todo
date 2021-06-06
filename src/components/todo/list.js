import React, {useState} from 'react';
import {Row, Col, Toast, Button, Badge} from 'react-bootstrap'


function TodoList (props) {

  
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);


    return (
    <Row>
        {props.list.map(item => (
          <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            
            <Badge pill variant={item.variant} className="mr-3">{item.status}</Badge>
            <strong className="mr-auto">{item.assignee}</strong>
            
          </Toast.Header>
          <Toast.Body onClick={() => props.handleComplete(item._id)}>{item.text}</Toast.Body>
        </Toast>
        ))}
    </Row>
    );
}

export default TodoList;
