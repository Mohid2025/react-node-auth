import {React, useState} from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {

    const[form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
          console.log("SUBMIT CLICKED");

        const res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const data = await res.json();
        alert(data.message);
    };

  return (
    <>
        <div className='flex justify-center mt-10'>
            <h1 className='text-3xl text-black font-bold'>Signup Page</h1>
        </div>

        <div className='flex justify-center mt-5'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-80'>
                <input 
                    name='username'
                    type="name" 
                    onChange={handleChange}
                    placeholder="Username" 
                    className='p-2 border border-gray-300 rounded'
                />
                <input 
                    name='email'
                    type="email" 
                    onChange={handleChange}
                    placeholder="Email" 
                    className='p-2 border border-gray-300 rounded'
                />
                <input 
                    name='password'
                    type="password" 
                    placeholder="Password" 
                    onChange={handleChange}
                    className='p-2 border border-gray-300 rounded'
                />
                <button 
                    type="submit" 
                    className='bg-blue-200 text-black p-2 rounded hover:bg-gray-600 hover:text-white'
                >
                    Signup
                </button>
            </form>
        </div>

        <div className='flex justify-center mt-4'>
            <NavLink to="/" className="text-red-500 hover:underline">
                Already registered? Login
            </NavLink>
        </div>
    </>
  )
}

export default Signup
