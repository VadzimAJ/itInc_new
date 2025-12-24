import './App.css'
import {TodolistItem} from '../../TodolistItem.tsx';
import {useState} from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValues = 'all' | 'complited' | 'active'

function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValues>('all')

    const deliteTask = (taskId: number) => {
        setTasks(tasks.filter ((delitedTask)=> delitedTask.id !== taskId))
    }
    const changeFilter = (filter: FilterValues) => {
        return setFilter(filter)
    }

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(t => t.isDone)
    }
    if (filter === 'complited'){
        filteredTasks = tasks.filter(t => !t.isDone)
    }


    return (
        <div className="app">
            <TodolistItem
                title="What to learn"
                tasks={tasks}
                deliteTask = {deliteTask}
                changeFilter = {changeFilter}
            />
        </div>
    )
}

export default App
