import React from 'react';
import Sidebar from '../Main/Sidebar/Sidebar';
const Home = () => {
    return (
        <div>
            <div className="container-fluid row p-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-12">

                    <div className=' d-flex align-items-center justify-content-center bg-dark text-white min-vh-100 text-center'>
                        <h1 className='display-1 font-weight-bold'>Mini Task Manager</h1>




                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;