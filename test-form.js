// Simple test to submit a project
const testFormSubmission = async () => {
  const formData = new FormData();
  
  // Add basic data
  formData.append('title', 'Test Project');
  formData.append('location', 'Test Location');
  formData.append('area', 'Commercial Space');
  formData.append('tags', 'Under Construction');
  formData.append('rating', '4.5');
  formData.append('reviews', '100');
  formData.append('description', 'Test description');
  formData.append('facilities[]', 'gym');
  formData.append('facilities[]', 'parking');
  formData.append('sonderStandard[]', 'kitchen');
  
  // Create a simple test image blob
  const testImage = new Blob(['test'], { type: 'image/jpeg' });
  formData.append('images', testImage, 'test.jpg');

  try {
    const response = await fetch('https://aradhya-infra-e57v.vercel.app/api/projects', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.text();
    console.log('Response status:', response.status);
    console.log('Response:', result);
  } catch (error) {
    console.error('Test failed:', error);
  }
};

// Run in browser console
console.log('Copy and run this in your browser console when on the admin panel page');
console.log(testFormSubmission.toString());
