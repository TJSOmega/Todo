import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

import axios from 'axios'


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

// Need to figure out how to post to the API and also Delete.
const ToDo = () => {

  const [list, setList] = useState([]);
  const [listCount, setListCount] = useState(0);

  const _addItem = async (item) => {
    item.due = new Date();
    try {
      const response = await axios.post(todoAPI, item)
      console.log(response.data)
      setList([...list, response.data])
    } catch(e) {
      console.log(e)
    }
  };

  const _toggleComplete = async id => {

    console.log(id)

    let item = list.filter(i => i._id === id)[0] || {};

    console.log(item)

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      try {
        const response = await axios.put(url, item);

        setList(list.map(listItem => listItem._id === item._id ? response.data : listItem))
      } catch(e) {
        console.log(e)
      }
    }
  };

  
  


  const _deleteItem = async (id) => {

    let url = `${todoAPI}/${id}`;
    const response = await axios.delete(url)
    setList(list.filter(newListItem => newListItem._id !== response.data._id))
  }

  useEffect( async () => {
    const response = await axios.get(todoAPI)
    const primaryList = response.data.results
    setList(primaryList)
  }, [])

  useEffect( () => {
    let count = list.filter((item) => !item.complete).length;
    setListCount(count)
  }, [list])
  return (
    <>
      <header>
        <h2>
          To Do List Manager ({listCount})
        </h2>
      </header>
      <Container className="todo">
        <Row>
          <Col><TodoForm handleSubmit={_addItem} /></Col>
          <Col xs={7}><TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          /></Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDo;
