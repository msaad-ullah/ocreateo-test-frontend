import './styles.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/slices/taskSlice';
import { toast } from 'react-toastify';

export default function AddTaskForm() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const add = (e) => {
        e.preventDefault();

        if(title.length < 1) {
            return toast.error('Please enter task')
        }
        dispatch(addTask(title));
        setTitle('');
    }
    return (
        <form className="form-container">
            <input className="form-input" placeholder='Enter task' value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="add-task-btn" onClick={add}>Add</button>
        </form>
    )
}