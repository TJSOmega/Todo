import React, { useState } from 'react';
import { Row, Col, Toast, Button, Badge } from 'react-bootstrap'


function TodoList(props) {


  // Need to update so that Badges can be changed as well as so that hitting x on an item removes it from the Database instead of hiding all items.


  return (
    <Row>
      {props.list.map(item => (
        <Toast key={item._id}>
          <Toast.Header closeButton= {false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />

            <Badge pill variant={item.complete ? "danger": "success" } className="mr-3">{item.complete ? "Completed" : "Pending"}</Badge>
            <strong className="mr-auto">{item.assignee}</strong>
            <button onClick={() => props.handleDelete(item._id)} type="button" class="close ml-2 mb-1" data-dismiss="toast"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
          </Toast.Header>

          <Toast.Body onClick={() => props.handleComplete(item._id)}>{item.text}</Toast.Body>
        </Toast>
      ))}
    </Row>
  );
}

export default TodoList;
