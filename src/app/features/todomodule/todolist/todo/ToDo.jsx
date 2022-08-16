import React from 'react'
import "./todo.css"

export default function ToDo({ todo, handleClickList,handleChangeCheckBoxList }) {

  const handleClick = (e) => {
    handleClickList(e.target.classList[1], todo)
  }
  const handleChangeCheckBox = (e) => {
    handleChangeCheckBoxList(todo.id)
  }
  return (
    <div className='todocmp col-lg-4 offset-lg-1'>
      <input
        className='check'
        type="checkbox"
        checked={todo.completed == true ? 'checked' : ''}
        onChange={(e) => handleChangeCheckBox(e)}
      />
      <span>{todo.title}</span>
      <i
        className="fa-solid fa-trash"
        onClick={(e) => handleClick(e)}
      ></i>
      <i
        className="fa-solid fa-pencil"
        onClick={(e) => handleClick(e)}
      ></i>
    </div>
  )
}
