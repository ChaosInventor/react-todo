import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

let tasksTest = [
    { added: new Date(Date.now()), name: 'TASK' },
    { added: new Date(Date.now()), name: "I'm done", done: new Date(Date.now()) },
    { added: new Date(Date.now()), name: "I'm done", done: new Date(Date.now()) },
    { added: new Date(Date.now()), name: 'TASK' },
    { added: new Date(Date.now()), name: 'TASK' },
    { name: 'TASK' },
    { name: 'TASK' },
    { name: "I'm done", done: new Date(Date.now()) },
    { added: new Date(Date.now()), name: "I'm done", done: new Date(Date.now()) },
    { name: "I'm done", done: new Date(Date.now()) },
    { name: "I'm done", done: new Date(Date.now()) },
    { name: ' REACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXccccccccccccccccccccccccccc ' },
    { added: new Date(Date.now()), name: ' REACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXcccccccccccccccccccccccccccREACXTCDTCXccccccccccccccccccccccccccc ' },
].map((task, index) => { return { ...task, id: index}})

console.log(localStorage.getItem('tasks'))

function App() {
    const [tasks, dispatch] = useReducer(appReducer, JSON.parse(
        localStorage.getItem('tasks'))?.map(t => { return {...t,
            added: new Date(t.added),
            completed: t.completed? new Date(t.completed): undefined,
            due: t.due? new Date(t.due): undefined,
        }})
        ??[]
    )
    console.log(tasks)

    const todo = tasks.filter(task => !task.completed)
    const done = tasks.filter(task => task.completed)

    function appReducer(tasks, action) {
        let ret;
        switch(action.type) {
            case 'addTask': {
                ret = [...tasks, action.task];
            } break;
            case 'completeTask': {
                ret = tasks.map(task => task.id === action.id? {...task, completed: new Date(Date.now())} : task );
            } break;
            default: {
                throw "Unknown action type";
            }
        }

        localStorage.setItem('tasks', JSON.stringify(ret));
        return ret;
    }

    return (
        <div id='app'>

        <h2> Add task: </h2>
        <TaskForm onAddTask={e => dispatch({ type: 'addTask', task: e.newTask, })}/>

        <h3> Todo: </h3>
        <TaskList tasks={todo} onChecked={e => {console.log(e); dispatch({ type: 'completeTask', id: e.taskId })}} />

        <h3> Done: </h3>
        <TaskList tasks={done} />

        </div>
    );
}
        /*
            <form onSubmit={
                e => { e.preventDefault(); console.log(e.target.attribues); setTasks(t => [...t , {id: higestId++, name: document.getElementById('asdf').value}]); console.log(e) }
            }>
                <label>Task title </label>
                <input type='text' name='name' id='asdf'/>
                <button type='submit'>Add</button>
            </form>
            <TaskList tasks={todo .map(v => { return {...v, onDone: e => setTasks(tasks => tasks.filter(t => t.id !== e.id)) } }) />
            <h3> Done: </h3>
            <ol>
            {done}
            </ol>
    */

export default App;
