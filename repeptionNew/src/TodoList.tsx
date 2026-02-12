import {Task} from '../repCash/App.tsx';

type Todolist = {
    title: string
    tasks: Task[]
}

export const TodoListItem = (props: Todolist) => {

    const {title, tasks} = props
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.length !== 0 ? (
                        tasks.map (task => {
                            return (<li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                            </li>)
                            })
                ) :  (<p> "No Tasks</p>)
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}