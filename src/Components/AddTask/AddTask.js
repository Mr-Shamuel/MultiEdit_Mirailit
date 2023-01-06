import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../Main/Sidebar/Sidebar';

const AddTask = () => {

    const [message, setName] = useState('');
    const [created_on, setDate] = useState('');
    const [assigned_name, setAssignName] = useState('');
    const [assigned_to, setAssignTo] = useState('');
    const [priority, setPriority] = useState('');


    const url = 'https://devza.com/tests/tasks/create';
    const token = "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"


    const handleSubmit = (e) => {
        axios.post(url,
            {
                message: message,
                created_on: created_on,
                assigned_name: assigned_name,
                assigned_to: assigned_to,
                priority: priority,
            }, {
            headers: {
                'AuthToken': `${token}`,
            }
        }

        )
            .then((response) => {
                console.log(response.data);



            });


        e.preventDefault();
    }




    return (
        <div>
            <div className="container-fluid row p-0 vh-100">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 clients">

                    <h1 className='text-center pt-5'>Add Task : </h1>
                    <div className=' d-flex align-items-center justify-content-center'>

                        <form className='w-50 ' onSubmit={handleSubmit}>

                            <label >Task Name</label>
                            <input onChange={(e) => setName(e.target.value)} value={message} type="text" className="form-control py-2 my-2" id="name" aria-describedby="name" placeholder="Enter Task Name" />
                            <label >Date</label>
                            <input onChange={(e) => setDate(e.target.value)} value={created_on} type="date" className="form-control py-2 my-2" id="date" aria-describedby="date" placeholder="Enter Date" />
                            <label >Assign To</label>
                            <input onChange={(e) => setAssignName(e.target.value)} value={assigned_name} type="text" className="form-control py-2 my-2" id="date" aria-describedby="date" placeholder="assigned_name" />
                            <label >Assign no</label>
                            <input onChange={(e) => setAssignTo(e.target.value)} value={assigned_to} type="text" className="form-control py-2 my-2" id="date" aria-describedby="date" placeholder="assigned_no" />
                            <label >Priority no</label>
                            <input onChange={(e) => setPriority(e.target.value)} value={priority} type="text" className="form-control py-2 my-2" id="date" aria-describedby="priority" placeholder="priority" />


                            <button type="submit" className="btn btn-success mt-2">Add Task</button>
                        </form>

                    </div>



                </div>

            </div>

        </div>
    );
};

export default AddTask;