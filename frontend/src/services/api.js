import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/submit-form`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting the form', error);
    throw error;
  }
};
