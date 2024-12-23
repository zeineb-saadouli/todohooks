import React from 'react'
import Todo from "./Todo";

function TodoList({tasks,editTask, deleteTask}) {
  return (
    <div>
    
      <ul>
        {tasks.map((task,id) => (
          <Todo key={task.id} task={task}  editTask={editTask} deleteTask={deleteTask}/>
        ))}
      </ul>
  
    </div>
  )
}

export default TodoList
