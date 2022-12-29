import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import AddTask from './Pages/AddTask/AddTask';
import CompleteTask from './Pages/CompleteTask/CompleteTask';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import MyTasks from './Pages/MyTasks/MyTasks';
import TaskDetails from './Pages/MyTasks/TaskDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <AddTask></AddTask>
        },
        {
          path: '/mytasks',
          element: <MyTasks></MyTasks>
        },
        {
          path: '/mytasks/taskdetails',
          element: <TaskDetails></TaskDetails>
        },
        {
          path: '/completetask',
          element: <CompleteTask></CompleteTask>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }

      ]
    },

  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
