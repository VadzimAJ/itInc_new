import './App.css'
import {TodolistItem} from './TodolistItem.tsx';

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const App = () => {

    const task1: Task[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    const task2: Task[] = [
        { id: 1, title: 'Hello world', isDone: true },
        { id: 2, title: 'I am Happy', isDone: false },
        { id: 3, title: 'Yo', isDone: false },
    ]

    const task3: Task[] = [
        { id: 1, title: 'Meat', isDone: true },
        { id: 2, title: 'Vegetables', isDone: true },
        { id: 3, title: 'Tea', isDone: false },
    ]

  return (
      <div className="app">
        <TodolistItem title = "HTML&CSS" tasks={task1}/>
        <TodolistItem title = "Wot to Buy" tasks={task2}/>
        <TodolistItem title = "Wot to Eat" tasks={task3}/>
      </div>
  )
}

export default App
