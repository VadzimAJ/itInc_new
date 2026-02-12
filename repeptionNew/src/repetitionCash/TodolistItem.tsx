import {Task} from './App.tsx';
import {Button} from './Button.tsx';

type Props = {
    title: string;
    tasks: Task[]
}

export const TodolistItem = ({title, tasks}:Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                { tasks.length !== 0 ? (
                    tasks.map(task=>{
                        return(<li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>)}
                )

                    ) :
                <p>"No tasks"</p>}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                <Button title='Жмых' callBack={()=>{alert('Клик')}}/>
                <Button title='Пых' callBack={()=>{alert('Пжык ')}}/>
            </div>
        </div>
    )
}