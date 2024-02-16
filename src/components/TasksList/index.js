import TaskItem from '../TaskItem';

export default function TasksList({tasks = []}) {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem task={task} key={task._id} />
            ))}
        </div>
    )
}