import { useDispatch } from 'react-redux';
import './styles.css'
import { MdDelete } from 'react-icons/md';
import { deleteTask } from '../../redux/slices/taskSlice';

export default function TaskItem({ task }) {
    const { title, _id } = task;
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteTask(_id))
    }
    return (
        <div className="task-item">
            <p>{title}</p>
            <MdDelete color='red' size={20} style={{cursor: 'pointer'}} onClick={onDelete} />
        </div>
    )
}