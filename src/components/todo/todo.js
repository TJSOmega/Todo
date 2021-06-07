import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "react-bootstrap"
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

function ToDo() {

  // const [list, setList] = useState([])

  // const addItem = (item) => {
  //   console.log(item)
  //   item._id = Math.random();
  //   item.complete = false;
  //   item.variant= "success"
  //   item.status= "Pending"
  //   setList([...list, item])
  // };

  // const toggleComplete = id => {

  //   let item = list.filter(i => i._id === id)[0] || {};

  //   if (item._id) {
  //     if (item.complete === false) {
  //       item.complete = !item.complete;
  //       item.variant = "danger"
  //       item.status = "Completed"
  //       console.log(item.complete)
  //     } else if (item.complete === true) {
  //       item.complete = !item.complete;
  //       item.variant = "success"
  //       item.status = "Pending"
  //       console.log(item.complete)
  //     }

  //     setList(list.map(listItem => listItem._id === item._id ? item : listItem));
  //   }

  // };

  // useEffect(() => {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A', variant: "success", status: "pending"},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A', variant: "success", status: "pending" },
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B', variant: "success", status: "pending" },
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C', variant: "success", status: "pending" },
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B', variant: "success", status: "pending" },
  //   ];
  //   setList(list);
  // }, [])


  return (
    <>
      <header>
        <h2>
          To Do List Manager ({list.filter(item => !item.complete).length})
          </h2>
      </header>
      <Container className="todo">
        <Row>
          <Col><TodoForm handleSubmit={addItem} /></Col>
          <Col  xs={7}><TodoList
            list={list}
            handleComplete={toggleComplete}
          /></Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDo;
