import { useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from "./redux/slices/taskSlice";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(getAllTasks());
  }, [])

  return (
    <div style={{ padding: '10px' }}>
      <AddTaskForm />
      <TasksList tasks={tasks} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}