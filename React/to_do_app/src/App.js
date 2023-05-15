import { useState } from 'react'
import './index.css'

export default function App(){
    const [newItem, setNewItem] = useState("")
    const [todos, setNewTodos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        setNewTodos(currentTodos =>{
            return[
            ...currentTodos,
            {id: crypto.randomUUID(), title: newItem, conpleted: false},
            ]
        })
        setNewItem("")
    }

    function toggleTodo(id, completed) {
        setNewTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id){
                    return{...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteTodo(id) {
        setNewTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit} className = "bg-yellow-400 h-40 text-center">
                <div className="form-row">
                    <label htmlFor="item text-3xl">New Item</label>
                    <input value= {newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item"/>
                    <button className="bg-slate-700">Add</button>
                    </div>
            </form>
            <h1 className="text-3xl">To do list</h1>
            <ul className="list">
                {todos.length === 0 && "No todos"}
                {todos.map(todo => {
                    return(
                        <li id={todo.key}>
                            <label>
                                <input type="checkbox" 
                                checked = {todo.completed}
                                onChange={e => toggleTodo(todo.id, e.target.checked)} 
                                />
                                {todo.title}
                            </label>
                            <button onClick={() => deleteTodo(todo.id)} className="btn-primary">DELETE</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}