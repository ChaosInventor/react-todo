import './TaskList.css'
import Task from './Task';

function TaskList({ tasks, onChecked }) {
    return (
        <ol className='taskList'>
            {tasks.map(task =>
                    <Task key={task.id} className='taskRow'
                        id={task.id} name={task.name} added={task.added}
                        due={task.due} completed={task.completed} view={task.completed}
                        onSelectedChange={e => onChecked({...e, taskId: task.id}) }
                    />
                )
            }
        </ol>
    );
}

export default TaskList;
