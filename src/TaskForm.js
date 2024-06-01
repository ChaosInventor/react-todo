import { v4 as uuidv4 } from 'uuid';

function TaskForm({ onAddTask }) {
    function handleOnSubmit(e) {
        e.preventDefault();

        e.newTask = {
            id: uuidv4(),
            name: e.target.elements.taskName.value,
            added: new Date(Date.now()),
            due: new Date(e.target.elements.taskDue.value),
        };
        console.log(e);
        onAddTask?.(e);
    }

    return (
        <form className="taskForm" onSubmit={handleOnSubmit}>
            <label> Task text </label>
            <input type='text' name='taskName' />

            <br />

            <label> Task due date </label>
            <input type='date' name='taskDue' />

            <br />

            <button type='submit'>Add</button>
        </form>
    );
}

export default TaskForm;
