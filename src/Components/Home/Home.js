import React from 'react';
import Sidebar from '../Main/Sidebar/Sidebar';
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
        <div>
            <div className="container-fluid row p-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-12">

                    <div className=' d-flex align-items-center justify-content-center bg-dark text-white min-vh-100 text-center'>
                        {/* <h1 className='display-1 font-weight-bold'>Mini Task Manager</h1> */}


                        <h1 className="text-center display-1 ">
                            <span className="wrapper_child" >  <Typewriter
                                options={{
                                    strings: ["Mini Task Manager", "Task Dashboard", " User Dashboard"],

                                    autoStart: true,
                                    delay: 70,
                                    loop: true
                                }}

                            /> </span>
                        </h1>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;