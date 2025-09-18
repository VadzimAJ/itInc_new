import './App.css'
import {TodolistItem} from "../TodolistItem.tsx";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    const tasks1: TaskType[] = [
        {id: 1, title:"HTML&CSS", isDone: true},
        {id: 2, title:"JS", isDone: true},
        {id: 3, title:"ReactJS", isDone: false},
    ]
    const tasks2: TaskType[] = [
        {id: 1, title:"Milk", isDone: false},
        {id: 2, title:"Cookies", isDone: false},
        {id: 3, title:"Meat", isDone: false},
        {id: 4, title:"Beer", isDone: false},
    ]

    return (
        <div className="app">
            <TodolistItem title = "What to learn" tasks = {tasks1}/>
            <TodolistItem title = "What to buy" tasks = {tasks2}/>
        </div>
    )
}

export default App
