import {React, useState} from 'react'
import { NavLink , useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const[form, setForm] = useState({
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
        
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            // alert("Login successful");
            navigate("/dashboard");
        } else {
            alert(data.message);
        }
    };

  return (
    <>
        <div className='flex justify-center mt-10'>
            <h1 className='text-3xl text-black font-bold'>Login Page</h1>
        </div>

        <div className='flex justify-center mt-5'>
            <form  onSubmit={handleSubmit} className='flex flex-col space-y-4 w-80'>
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
                    onChange={handleChange}
                    placeholder="Password" 
                    className='p-2 border border-gray-300 rounded'
                />
                <button 
                    type="submit" 
                    className='bg-blue-200 text-black p-2 rounded hover:bg-gray-600 hover:text-white'
                >
                    Login
                </button>
            </form>
        </div>

        <div className='flex justify-center mt-4'>
            <NavLink to="/signup" className="text-red-500 hover:underline">
                Don't have an account? Signup
            </NavLink>
        </div>
         

        
    </>
  )
}

export default Login