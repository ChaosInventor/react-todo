import './Task.css'

function Task({
    id, name, added, completed, due, priority,
    view,
    onSelectedChange,

    className,
}) {
    return (
        <li className={`task ${className}`} title={id}>
            {priority? <div> {priority} </div> : null}
            <label className='taskColumn taskName'>{name}</label>
            {added? <div className='taskColumn taskDate'> {added.toLocaleDateString()} {added.toLocaleTimeString()} </div> : null}
            {completed? <div className='taskColumn taskDate'> {completed.toLocaleDateString()} {completed.toLocaleTimeString()} </div> : null}
            {due? <div className='taskColumn taskDate'> {due.toLocaleDateString()} </div> : null}
            {view? null : <input className='taskColumn taskMark' type='checkbox' onChange={onSelectedChange} /> }
        </li>
    );
}

export default Task;
