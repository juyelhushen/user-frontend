import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("/api/users");
        setUser(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete("/api/user/" + id);
        loadUser();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((userData, index) => (
                                <tr key={index}>
                                    <th scope='row' key={index}>{index + 1}</th>
                                    <td>{userData.name}</td>
                                    <td>{userData.username}</td>
                                    <td>{userData.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`/viewuser/${userData.id}`}>View</Link>
                                        <Link className='btn btn-light mx-2' to={`/edituser/${userData.id}`}>Edit</Link>
                                        <Button className='btn mx-2' variant="danger " onClick={() => deleteUser(userData.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Home;