import {FilterValues, TaskType} from './src/temp/App.tsx';
import { Button } from "./src/temp/Button.tsx";

type Props = {
    title: string,
    tasks: TaskType[]
    deliteTask : (taskId: number)=>void
    changeFilter : (filter:FilterValues) => void
}

export const TodolistItem = ({title, tasks, deliteTask, changeFilter}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            {
                tasks.length === 0 ? (
                    <span> Nowbody tasks </span>
                ) : (
                    <ul>
                        {tasks.map( t => {

                            return (
                                <li key={t.id}>
                                    <input type="checkbox" checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <Button title='x' onClick ={() => {deliteTask(t.id)}}/>
                                </li>
                            )
                        })
                        }
                    </ul>
                )
            }

            <div>

                <Button title='All' onClick={()=>changeFilter('all')}/>
                <Button title='Active' onClick={()=>changeFilter('active')}/>
                <Button title='Completed' onClick={()=>changeFilter('complited')}/>
            </div>
        </div>
    )
}