import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password
      });

      if (response.status === 200) {
        localStorage.setItem("name", response.data.name); // Store admin name
        alert('Login successful');
        navigate('/dashboard'); // or your desired route
      } else {
        alert(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(error.response?.data?.message || 'Server error');
    }
  };

  return (
    <div className=" bg-[#c0d7d7] flex justify-center items-center h-screen">
      <form className="bg-[#F9F9F9] p-8 text-center rounded-xl shadow-md w-96" onSubmit={handleLogin}>
        <h2 className="text-3xl font-bold mb-10 text-[#048886]">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-[300px] p-3 mb-4 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[300px] p-3 mb-4 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-[120px] bg-[#048886] text-white p-3 rounded-lg hover:bg-teal-700"
        >
          Login
        </button>

        <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <a href="/register" className="text-[#048886] hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
