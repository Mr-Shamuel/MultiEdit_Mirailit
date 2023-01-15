import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import { BallTriangle } from 'react-loader-spinner'
import './ShowProducts.css'
import { TextField } from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import EditIcon from '@mui/icons-material/Edit';

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';

// sweet alert2 
import Swal from 'sweetalert2'


const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    const [editable, setEditable] = useState(false);
    const [spinner, setSpinner] = useState(false);

    //get data
    const fetchData = () => {
        // set spinner loading 
        setSpinner(true);

        axios.get(
            'https://demostore.mirailit.com/wp-json/wc/v3/products',
            {
                auth: {
                    username: 'ck_35f64c79ebe2cfd6979b6f81c103ff01135ae1b8',
                    password: 'cs_1dd3842d9bdc656ace99007faef0bb09a4d34400',
                },
            }
        )
            .then(res => {
                // after fettch data stoop spinner 
                setSpinner(false);
                setProducts(res.data)
            })

    };
    console.log(products)
    useEffect(() => {

        fetchData();
    }, []);


    // Function to handle the "Edit" button click
    const handleEdit = () => {
        setEditable(true);
    };

    // Function to handle the "Save" button click
    const handleSave = async () => {
        const data = {
            update: products.map(product => ({
                id: product.id,
                price: product.price,
            })),
        };
        // Make the PUT request
        axios.put(
            'https://demostore.mirailit.com/wp-json/wc/v3/products/batch',
            data,
            {
                auth: {
                    username: 'ck_35f64c79ebe2cfd6979b6f81c103ff01135ae1b8',
                    password: 'cs_1dd3842d9bdc656ace99007faef0bb09a4d34400',
                },
            }
        )
        Swal.fire(
            'Price Update',
            'Price successfully updated',
            'success'
        )



        setEditable(false);

    };

    // Function to handle the price change
    const handlePriceChange = (event, id) => {
        const updatedProducts = [...products];
        const productIndex = updatedProducts.findIndex(product => product.id === id);
        updatedProducts[productIndex].price = event.target.value;
        setProducts(updatedProducts);
    };



    return (
        <div>

            <div className="container-fluid row p-0 vh-100">
                <div className="col-md-2 py-5 text-center bg-info">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10  px-2">

                    <h4 className="py-2 text-info"> All Products  {products.length}</h4>

                    <button className='btn btn-warning' onClick={handleEdit}><EditIcon></EditIcon> Edit All</button>
                    <button className='btn btn-success mx-2' onClick={handleSave}><SaveAsIcon></SaveAsIcon> Save All</button>


                    <table className=" mt-3 table table-borderless table-hover">

                        <thead>
                            <tr className="bg-info text-light">

                                <th className="text-light " scope="col"><BrokenImageOutlinedIcon></BrokenImageOutlinedIcon> Image</th>
                                <th className="text-light" scope="col"><BadgeOutlinedIcon></BadgeOutlinedIcon> Name</th>
                                <th className="text-light" scope="col"><AccountBoxOutlinedIcon></AccountBoxOutlinedIcon> Id</th>
                                <th className="text-light" scope="col"><PaidOutlinedIcon /> Price</th>


                            </tr>
                        </thead>

                        <tbody className="text-none">
                            {spinner && <div className='parent-container'>
                                <BallTriangle
                                    className='Loading_spinner'
                                    height={100}
                                    width={100}
                                    radius={5}
                                    color="#4fa94d"
                                    ariaLabel="ball-triangle-loading"
                                    wrapperClass={{}}
                                    wrapperStyle=""
                                    visible={true}
                                />
                            </div>
                            }
                            {


                                products.map((product) => {
                                    const { id, name, price } = product;

                                    return (
                                        <tr className="table table-borderless" key={id} >
                                            <td className="text-dark">
                                                <img src={product.images[0].src} alt={product.name} width="100" />
                                            </td>
                                            {/* <td className="text-dark"> {name.slice(0, 20)}</td> */}
                                            <td className="text-dark"> {name}</td>
                                            <td className="text-dark"> {id}</td>
                                            <td className="text-dark">

                                                $ {
                                                    editable ? (
                                                        // <input type="number" value={price} onChange={e => handlePriceChange(e, id)} />

                                                        <TextField
                                                            type="number" value={price} onChange={e => handlePriceChange(e, id)}
                                                        />
                                                    )
                                                        : price
                                                }

                                            </td>

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

export default ShowProducts;