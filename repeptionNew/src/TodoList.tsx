import {Task} from './App.tsx';
import { Button } from './Button.tsx';

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
                <Button title='All' callBack={()=>{alert('All')}} />
                <Button title='Active' callBack={()=>{alert('Active')}} />
                <Button title='Completed' callBack={()=>{alert('Completed')}} />
            </div>
        </div>
    )
}