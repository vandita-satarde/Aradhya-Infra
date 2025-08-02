import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin@123';

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('name', 'Admin');
      alert('Login successful');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="bg-[#c0d7d7] flex justify-center items-center h-screen">
      <form className="bg-[#F9F9F9] p-6 md:p-8 text-center rounded-xl shadow-md w-70 md:w-96" onSubmit={handleLogin}>
        <h2 className="text-[25px] md:text-3xl font-bold mb-5 md:mb-10 text-[#048886]">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full md:w-[300px] p-2 md:p-3 mb-4 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full md:w-[300px] p-2 md:p-3 mb-4 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-[90px] md:w-[120px] bg-[#048886] text-white p-1.5 md:p-3 rounded-lg hover:bg-teal-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
