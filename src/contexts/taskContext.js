import { createContext, useState } from "react";


export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            title: 'Shop',
            description: 'Buy bread, milk',
            image: 'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
            isDone: false
        },
        {
            title: 'Shop',
            description: 'Buy tea, chocolate',
            image: 'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
            isDone: false
        },
        {
            title: 'Shop',
            description: 'Buy socks, sneakers',
            image: 'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
            isDone: false
        }
    ]);
    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    )
}