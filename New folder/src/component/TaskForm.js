import React, { useContext,useState,useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
    const { addTask,clearTask,editItem,editTask } = useContext(TaskListContext);
   
    const [ title,setTitle ] = useState('')
   
    const onChangeHandler = e =>{
     setTitle(e.target.value)
    }
    const onSubmitHandler = e=>{
        e.preventDefault()
        if (!editItem) {
            addTask(title)
            setTitle("")      
        }else {editTask(title,editItem.id)}
    }

    useEffect(()=>{
        if (editItem) {
            setTitle(editItem.title)
            console.log(editItem)
        }else setTitle("");
    },[editItem])

    return (
        <form 
           onSubmit={onSubmitHandler}
           className="form">
            <input 
               value = {title} 
               onChange={onChangeHandler}
               type="text"
               className="task-input"
               placeholder="add-task..." 
               required/>
            <div className="buttons">
                <button 
                type="submit" 
                className="btn add-task-btn">
                {editItem ? `Edit Task` : `Add Task`}
                </button>
                <button onClick={clearTask}
                    className="btn clear-btn"> clear  </button>
            </div>
        </form>
    )
}

export default TaskForm
