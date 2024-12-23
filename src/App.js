import AddTask from './AddTask';
import './App.css';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
const[tasks, setTasks]=useState([])
// la fonction d'ajout
const addTask = (newTask) => {
  setTasks((prevState) => [...prevState, newTask]);
};
  //la fonction edit
  const editTask=(taskId,newText)=>{
    setTasks((prevState)=>
      prevState.map((task)=>{
        return task.id===taskId ?{ ...task, text: newText}:task;
      })
    )
  }
  // la fonction delete
  const deleteTask = (taskId) => {
    setTasks((prevState)=>
   prevState.filter((task) => task.id !== taskId)//si task.id est différent de taSkID(L'id de la tache qu'on veut effacer) on garde la tache si elles sonts égales on supprime
   )}
  
  return (
    <div className="App">
      <AddTask onAddTask={addTask}/>
      <TodoList tasks={tasks}  editTask={editTask} deleteTask={deleteTask} />

    </div>
  );
}

export default App
