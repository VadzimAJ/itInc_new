import './App.css'
import {TodoListItem} from './TodoList.tsx';

type Task = {
  id: number
  title: string
  isDone: boolean
}

export const App = () => {

  const tasks1:Task[] = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
  ]

  const tasks2:Task[] = [
    {id: 1, title: "Milk", isDone: true},
    {id: 2, title: "Bread", isDone: true},
    {id: 3, title: "Cola", isDone: false},
  ]

  const tasks3:Task[] = [
  ]

  return (
      <div className="app">
        <TodoListItem title = 'What to learn' tasks={tasks1}/>
        <TodoListItem title = 'What to Buy' tasks={tasks2}/>
        <TodoListItem title = 'What to Eat' tasks={tasks3}/>
      </div>
  )
}

