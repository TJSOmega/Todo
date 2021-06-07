import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function TodoForm(props) {

  const [item, setItem] = useState({})

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    props.handleSubmit(data);
    console.log({errors})
}



  return (
    <>
      <Card style={{ width: '22rem', height: '28rem' }}>
        
       <Card.Body>
         <header> <strong>Add To Do Item</strong></header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="todoList">
            <Form.Label><strong>To Do Item</strong> </Form.Label>
            <Form.Control type="text" placeholder="Item Details" {...register("text", { required: true })} />
          </Form.Group>

          <Form.Group controlId="formTodo">
            <Form.Label><strong>Assigned To</strong></Form.Label>
            <Form.Control type="text" placeholder="Assignee Name" {...register("assignee", { required: true })} />
          </Form.Group>

          <Form.Group controlId="formBasicRange">
            <Form.Label><strong>Difficulty</strong></Form.Label>
            <Form.Control type="range" min="1" max="5" {...register("difficulty", { required: true })} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Item
  </Button>
        </Form>
      </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;
