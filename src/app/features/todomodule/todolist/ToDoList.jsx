import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ToDo from './todo/ToDo'
import ManageToDo from '../managetodo/ManageToDo'
import { deleteTask, getAllTasks, changeToDoCheckBox } from "../todoSlice"

export default function ToDoList() {

  let todos = useSelector(getAllTasks)
  let [list, setList] = useState(todos.todos)

  const dispatch = useDispatch()
  useEffect(() => {
    setList([...todos.todos])
  }, [todos]);

  const handleClickList = (classOperation, element) => {
    switch (classOperation) {
      case 'fa-trash':
        if (window.confirm('voulez-vous supprime cette tache???')) {
          dispatch(deleteTask(element.id))
          setList(list.filter(todo => {
            return todo.id != element.id
          }))
        }
        break;
      default:
        break;
    }
  }
  const handleChangeFilter = (e) => {
    setList(todos.todos.filter(todo => {
      return todo.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    }))
  }
  const handleChangeCheckBoxList = (id) => {
    dispatch(changeToDoCheckBox(id))
  }
  const handleTasksTypeClickList = (classType) => {
    switch (classType) {
      case 'all':
        setList(todos.todos)
        break;
      case 'completed':
        setList(todos.todos.filter(todo => {
          return todo.completed === true
        }))
        break;
      default:
        setList(todos.todos.filter(todo => {
          return todo.completed === false
        }))
        break;
    }
  }

  return (
    <>
      <div className='row'>
        <div className='col-lg-6 offset-lg-3'>
          <input
            type="text"
            className='form-control'
            placeholder='Search a task'
            onChange={(e) => handleChangeFilter(e)}
          />
          {
            list.map(todo => {
              return <ToDo
                key={todo.id}
                todo={todo}
                handleClickList={handleClickList}
                handleChangeCheckBoxList={handleChangeCheckBoxList} />
            })
          }
        </div>
      </div>
      <ManageToDo handleTasksTypeClickList={handleTasksTypeClickList} />
    </>
  )
}
