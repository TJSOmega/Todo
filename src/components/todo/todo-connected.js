import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import TodoForm from './form.js';
import TodoList from './list.js';
import Pagination from './pagination.js'
import Auth from '../auth/Auth.js'


import './todo.scss';

import axios from 'axios'


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

// Need to figure out how to post to the API and also Delete.
// Need to add number of items view, sort by difficulty, default view only incomplete items
const ToDo = () => {

  const [list, setList] = useState([]);
  const [listCount, setListCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [listsPerPage, setListsPerPage] = useState(4)



  const _addItem = async (item) => {
    console.log(item)
    item.due = new Date();
    try {
      const response = await axios.post(todoAPI, item)
      setList([...list, response.data])
    } catch (e) {
      console.log(e)
    }
  };

  const _toggleComplete = async id => {


    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      try {
        const response = await axios.put(url, item);

        setList(list.map(listItem => listItem._id === item._id ? response.data : listItem))
      } catch (e) {
        console.log(e)
      }
    }
  };





  const _deleteItem = async (id) => {

    let url = `${todoAPI}/${id}`;
    const response = await axios.delete(url)
    setList(list.filter(newListItem => newListItem._id !== response.data._id))
  }

  useEffect(async () => {
    const response = await axios.get(todoAPI)
    const primaryList = response.data.results
    setList(primaryList)
  }, [])

  useEffect(() => {
    let count = list.filter((item) => !item.complete).length;
    setListCount(count)
  }, [list])

  const indexOfLastList = currentPage * listsPerPage;
  const indexOfFirstList = indexOfLastList - listsPerPage;
  const currentLists = list.slice(indexOfFirstList, indexOfLastList)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <header>
        <h2>
          To Do List Manager ({listCount})
        </h2>
      </header>
      <Auth>
        <Container className="todo">
          <Row>
            <Col><TodoForm handleSubmit={_addItem} /></Col>
            <Col xs={7}><TodoList

              list={currentLists}
              handleComplete={_toggleComplete}
              handleDelete={_deleteItem}
            />
              <Pagination listsPerPage={listsPerPage} totalLists={list.length} paginate={paginate}></Pagination>
            </Col>

          </Row>
        </Container>
      </Auth>
    </>
  );
};

export default ToDo;
