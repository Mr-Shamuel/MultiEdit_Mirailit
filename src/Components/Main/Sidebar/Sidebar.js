
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import TaskIcon from '@mui/icons-material/Task';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
const Sidebar = () => {


    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/" className="text-light">
                        <HomeIcon className="text-light" style={{ color: 'red', fontSize: '20px' }}> </HomeIcon> <span>Home</span>

                    </Link>
                </li>

                <li>
                    <Link to="/showtask" className="text-light">
                        <TaskIcon className="text-light" style={{ color: 'red', fontSize: '20px' }}> </TaskIcon> <span> ShowTasks List </span>



                    </Link>
                </li>

                <li>
                    <Link to="/addtask" className="text-light">
                        <AddTaskIcon className="text-light" style={{ color: 'red', fontSize: '20px' }}> </AddTaskIcon> <span>Add Task</span>
                    </Link>
                </li>
                <li>
                    <Link to="/usersLists" className="text-light">
                        <PersonOutlineIcon className="text-light" style={{ color: 'red', fontSize: '20px' }}> </PersonOutlineIcon> <span>Users Lists</span>
                    </Link>
                </li>


            </ul>

            <div>

            </div>
        </div>
    );
};

export default Sidebar;