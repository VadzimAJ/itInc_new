import {TaskType} from "./src/App.tsx";

type Props = {
    title: string,
    tasks: TaskType[]
}

export const TodolistItem = ({title, tasks}: Props) => {
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
                                </li>
                            )
                        })
                        }
                    </ul>
                )
            }

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}