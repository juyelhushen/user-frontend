import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react';

export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { id } = useParams();

    useEffect(() => {
        const loadUser = async () => {
            const result = await axios.get(`/api/user/${id}`);
            setUser(result.data);
        }
        loadUser();
    }, [id]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
                    <h2 className='text-center m-4'>User Details</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Details of user id:  {user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name:  </b>
                                    {user.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Username:  </b>
                                    {user.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email:  </b>
                                    {user.email}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='col text-center'>
                        <Link className='btn btn-primary my-3' to="/">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
