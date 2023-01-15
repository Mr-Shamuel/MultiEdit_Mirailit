
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import TaskIcon from '@mui/icons-material/Task';
import HomeIcon from '@mui/icons-material/Home';
const Sidebar = () => {


    return (
        <div className="sidebar d-flex flex-column justify-content-between  " style={{ height: "100vh", }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-light">
                        <HomeIcon className="text-light" style={{ color: 'red', fontSize: '20px' }}> </HomeIcon> <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/products" className="text-light">
                        <TaskIcon className="text-light" style={{ color: 'red', fontSize: '20px' }}> </TaskIcon> <span> ShowProducts List </span>
                    </Link>
                </li>
            </ul>
            <div>
            </div>
        </div>
    );
};

export default Sidebar;