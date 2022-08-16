import React from 'react'
import "./todomanage.css"

export default function ManageToDo({handleTasksTypeClickList}) {

  const handleTasksTypeClick = (e)=>{
    handleTasksTypeClickList(e.target.classList[2])
  }

  return (
    <div className='row'>
      <div className='col-lg-4 offset-lg-4'>
        <button 
        className='btn btn-primary all'
        onClick={(e)=>handleTasksTypeClick(e)}
        >All</button>
        <button 
        className='btn btn-primary completed'
        onClick={(e)=>handleTasksTypeClick(e)}
        >Completed</button>
        <button 
        className='btn btn-primary notcompleted'
        onClick={(e)=>handleTasksTypeClick(e)}
        >Not Completed</button>
      </div>
    </div>
  )
}
