import React from "react";
import { useState } from "react";
function Todo({task,deleteTask,editTask}) {
  const [isEditing, setIsEditing]= useState(false);
  const [editedTaskText, setEditedTaskText]= useState(task.text);
  const handleChange=(event)=>{
  setEditedTaskText(event.target.value)
}
const handleEdit=()=>{
  setIsEditing(true)
}
const handleSave = () => {
  editTask(task.id,editedTaskText);
  setIsEditing( false );
};
  const handleDelete=()=>{
  deleteTask(task.id)
    }
  return (
    <li>
    {/* test si isEditing true on ajoute le boutton save et le text input pour pouvoir changer le texte de notre tache */}
    {isEditing ? (
      <div>
        <input type="text" value={editedTaskText} onChange={handleChange} />
        <button onClick={handleSave}> Save </button>
        <button onClick={handleDelete}> Delete </button> 
      </div>
    ):(
       /*{ Si isEditing est false on a juste l'affichage de la tache avec bouton edit et bouton delete}*/
      <div>
        {task.text}
        <button onClick={handleEdit}>Edit </button>
        <button onClick={handleDelete}>Delete </button>
      </div>
    )
      
    }
  </li>
  )

}
export default Todo
