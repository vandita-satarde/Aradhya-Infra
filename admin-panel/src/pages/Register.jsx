import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/admin/register', {
      name,
      email,
      password,
      confirmPassword
  });

  if (response.status === 201) {
    alert('Registration successful');
    navigate('/'); // ← step 3
  } else {
    alert(response.data.message || 'Registration failed');
  }

  } catch (error) {
    console.error('Error:', error);
    alert('Server error');
  }
};


  return (
    <div className="bg-[#F9F9F9] flex justify-center items-center h-screen">
      <form className="bg-white p-8 text-center rounded-xl shadow-md w-96" onSubmit={handleRegister}>
        <h2 className="text-3xl font-bold mb-10 text-[#048886]">Admin Registration</h2>
        <input 
          type='text'
          placeholder="Name"
          className='w-[300px] p-3 mb-4 border rounded-lg'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-[300px] p-3 mb-4 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-[300px] p-3 mb-4 border rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          className="w-[300px] p-3 mb-4 border rounded-lg"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-[120px] bg-[#048886] text-white p-3 rounded-lg hover:bg-teal-700"
        >
          Register
        </button>

        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-[#048886] hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
