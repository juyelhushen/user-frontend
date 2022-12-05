import Button from 'react-bootstrap/Button';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  // const { name, username, email } = user;

  // const onInputChange = (e) => {
  //   setUser({...user,[e.target.name]: e.target.value});
  // }

  function handleOnChange(event) {

    const { value, name } = event.target;

    setUser(preValue => {
      return ({
        ...preValue,
        [name]: value
      });
    })

  }

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    await axios.post("/api/user", user)
    navigate("/");
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <form>
            <div className='mb-3'>
              <label htmlFor="Name" className='form-label'>
                Name
              </label>
              <input type="text" className='form-control' placeholder='Enter Your name' name='name'
                // onChange={(e) => onInputChange(e)} 
                onChange={handleOnChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="Username" className='form-label'>
                Username
              </label>
              <input type="text" className='form-control' placeholder='Enter Your Username' name='username'
                // onChange={(e) => onInputChange(e)}
                onChange={handleOnChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="Email" className='form-label'>
                E-mail
              </label>
              <input type="text" className='form-control' placeholder='Enter Your Email' name='email'
                // onChange={(e) => onInputChange(e)}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-md-12 text-center">
              <Button onClick={onSubmitHandle} className='mx-2' variant="primary">Submit</Button>
              <Link className='btn btn-secondary mx-2' to="/">Cancel</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
