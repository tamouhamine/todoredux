import React from 'react'
import "./newtodo.css"
import { useDispatch } from 'react-redux';
import { addNewTask } from "../todoSlice"

export default function () {

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const taskTitle = e.target.value.trim()
    if (e.key == 'Enter' && taskTitle != '') {
      dispatch(addNewTask(taskTitle))
      e.target.value = ''
    }
  }

  return (
    <div className='header row'>
      <div className='col-lg-6 offset-lg-3'>
        <h1>ToDo Tasks</h1>
        <input
          type="text"
          className='form-control'
          placeholder='Add new Task'
          onKeyUp={(e) => { handleChange(e) }}
        />
        <hr />
      </div>
    </div>
  )
}
