import React from 'react'
import {useState} from 'react'

function AddTask({onAddTask}) {
    const [newTask, setNewTask]= useState('')
    const handleChange=(event)=>{
        setNewTask(event.target.value)
    }
    const handleSubmit =(event)=>{
      event.preventDefault()
      onAddTask({ id: Date.now(), text: newTask })
      setNewTask("")
     }
  return (
    <div>
            <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleChange} placeholder='Enter a task'/>
        <button type="submit" >Add task</button>
      </form>
    </div>
  )
}

export default AddTask
