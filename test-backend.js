// Test script to verify backend is working
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const testBackend = async () => {
  try {
    console.log('Testing backend...');
    
    // Test 1: Check if server is responding
    const response = await axios.get('https://aradhya-infra-e57v.vercel.app/');
    console.log('✅ Server is responding:', response.data);
    
    // Test 2: Check if projects endpoint exists
    const projectsResponse = await axios.get('https://aradhya-infra-e57v.vercel.app/api/projects');
    console.log('✅ Projects endpoint working, found', projectsResponse.data.length, 'projects');
    
    console.log('Backend is working correctly!');
  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
  }
};

testBackend();
