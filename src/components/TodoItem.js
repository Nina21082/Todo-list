import React, {memo} from 'react';

export const TodoItem = memo(({whatToDo, deleteToDo, id, done, handleDone, edit, handleEdit, editChange}) => {
  return (
    <li className={done ? 'done' : "undone"}>{edit ? <input value={whatToDo} type='text' 
    onChange={(ev) => editChange(ev, id)}/> : whatToDo}<button onClick={() => deleteToDo(id)}>X</button>
    <button onClick={() => handleDone(id)}>{!done ? 'done' : "undone"}</button>
    <button onClick={() => handleEdit(id)}>{!edit ? 'edit' : "save"}</button></li>
  )
})
