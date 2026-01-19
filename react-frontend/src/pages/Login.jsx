import { React, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
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
            navigate("/dashboard");
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-[#0f1117] overflow-hidden font-sans">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-orange-600 rounded-full mix-blend-screen filter blur-[80px] animate-pulse"></div>

            {/* Glassmorphism Card */}
            <div className="relative z-10 w-full max-w-md p-8 mx-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                
                {/* Header/Logo Section */}
                <div className="flex items-center justify-start mb-8 space-x-3">
                    <div className="bg-white text-black font-black px-2 py-1 rounded-md text-xl">L</div>
                    <h1 className="text-3xl text-white font-semibold tracking-tight">Login</h1>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    {/* Email Field */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-gray-300 text-sm font-medium">Email:</label>
                        <input
                            name="email"
                            type="email"
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-gray-300 text-sm font-medium">Password:</label>
                        <input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-white text-black font-bold rounded-lg uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition-all shadow-lg"
                    >
                        Submit
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-8 text-center">
                    <NavLink to="/signup" className="text-gray-400 text-sm hover:text-white transition-colors underline-offset-4 hover:underline">
                        Don't have an account? Signup
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Login;