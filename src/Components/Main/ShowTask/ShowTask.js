import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ShowTask = () => {
    const ApiKey = 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a';
    const [tasks, setTasks] = useState([]);


    //geting task Data
    const getData = () => {
        axios.get('https://devza.com/tests/tasks/list', {
            headers: {
                'AuthToken': `${ApiKey}`,

            }
        })
            .then(res => setTasks(res.data.tasks))

    }
    // console.log(tasks)

    useEffect(() => {
        getData();
    }, [])


    //edit user
    const handleEdit = (id) => {

    }


    //delete task

    const handleDlete = (id) => {
        axios.delete(`https://devza.com/tests/tasks/delete/${id}`, {
        })
            .then(res => {
                getData();
                console.log("delete successful  ")
                alert("delete")


            })
            .catch(err => {
                console.log(err)
            })


    }


    return (
        <div>
            <div className="container-fluid row p-0 vh-100">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 clients">

                    <h4 className="py-2 text-info"> All Tasks {tasks.length}</h4>
                    <table className="table table-borderless table-hover">

                        <thead>
                            <tr className="bg-info text-light">

                                <th className="text-light " scope="col">Id</th>
                                <th className="text-light" scope="col">Tasks Name</th>
                                <th className="text-light" scope="col">Tasks  Date</th>
                                <th className="text-light" scope="col">Assign  Name</th>
                                <th className="text-light" scope="col">Assign  to</th>
                                <th className="text-light" scope="col">Priority</th>
                                <th className="text-light" scope="col"> </th>
                                <th className="text-light" scope="col"> Actions</th>
                                <th className="text-light" scope="col"> </th>





                            </tr>
                        </thead>

                        <tbody className="text-none">
                            {


                                tasks.map((task, index) => {
                                    const { id, message, created_on, assigned_name, assigned_to, priority } = task;

                                    return (
                                        <tr className="table table-borderless" key={id} >
                                            <td className="text-dark"> {id}</td>
                                            <td className="text-dark"> {message}</td>
                                            <td className="text-dark"> {created_on}</td>
                                            <td className="text-dark"> {assigned_name}</td>
                                            <td className="text-dark"> {assigned_to}</td>
                                            <td className={`${priority == 1 ? 'text-success' : priority == 2 ? 'text-warning' : 'text-danger'}  `}> {priority == 1 ? "High" : priority == 2 ? "Medium" : "Low"}</td>
                                            <td><button onClick={() => handleEdit(id)} className='btn btn-info'>Edit</button></td>
                                            <td><button onClick={() => handleDlete(id)} className='btn btn-danger'>Delete</button></td>

                                        </tr>

                                    )
                                }


                                )


                            }
                        </tbody>

                    </table>



                </div>

            </div>

        </div>
    );
};

export default ShowTask;