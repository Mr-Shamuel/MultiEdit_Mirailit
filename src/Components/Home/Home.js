import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
        <div>
            <div className="container-fluid row  ">
                <div className="col-md-2 py-5 text-center bg-info ">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10   p-0">
                    <div className=' d-flex align-items-center justify-content-center bg-dark text-white min-vh-100 text-center'>
                        <h1 className="text-center display-1 ">
                            <span className="wrapper_child" > Admin   <Typewriter
                                options={{
                                    strings: ["DashBoard", "Products Lists"],
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