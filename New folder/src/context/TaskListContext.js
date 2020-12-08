import React,{ createContext, useState,useEffect } from 'react';
import {v1 as uuid }from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = ( props )=>{

    const initialState =JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks,setTasks] = useState(initialState)

    const [ editItem,setEditItem ] = useState(null)

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    })

    const addTask = (title)=>{
        setTasks([...tasks,{ title, id:uuid()}])
    }

    const removeTask = id =>{
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearTask = ()=>{
        setTasks([])
    }

    const findItem = (id)=>{
        const item = tasks.find((task)=> task.id ===id);
        setEditItem(item)
    }

    const editTask = (title,id)=>{
        const newTask = tasks.map(task=>(task.id ===id ? {title,id}: task))

        setTasks(newTask)
        setEditItem(null)
    }

   

    return (
        <TaskListContext.Provider 
           value={{ 
                tasks,
                editItem,
                 addTask,
                 removeTask,
                 clearTask,
                 findItem,
                 editTask
                  }} 
        >
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider