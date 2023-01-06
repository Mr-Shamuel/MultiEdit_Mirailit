import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const UsersLists = () => {
    const ApiKey = 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a';
    const [users, setUsers] = useState([]);
    //geting Data
    const getData = () => {
        axios.get('https://devza.com/tests/tasks/listusers', {
            headers: {
                'AuthToken': `${ApiKey}`
            }
        })
            .then(res => setUsers(res.data.users))

    }
    console.log(users)
    useEffect(() => {
        getData();
    }, [])



    return (
        <div>
            <div className="container-fluid row p-0 vh-100">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 clients">

                    <h4 className="py-2 text-info"> All Users {users.length}</h4>
                    {/* <table className="table table-hover" > */}
                    <table className="table table-borderless table-hover">

                        <thead>
                            <tr className="bg-info text-light">

                                <th className="text-light " scope="col">Id</th>
                                <th className="text-light" scope="col">Name</th>


                            </tr>
                        </thead>

                        <tbody className="text-none">
                            {


                                users.map((user, index) => {
                                    const { id, name } = user;

                                    return (
                                        <tr className="table table-borderless" >
                                            <td className="text-dark"> {id}</td>
                                            <td className="text-dark"> {name}</td>

                                            {/* <td><button onClick={() => handleDlete(id)} className='btn btn-danger'>Delete</button></td> */}

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

export default UsersLists;