import axios from 'axios';

import { port } from '../../port';

const instance = axios.create({
  baseURL: port,
});

export const register_me = async (formData : any) => {
  try {
      const response = await instance.post('/api/users/register', formData);
      return response.data;
  } catch (error) {
      console.error('Error in register (service) => ', error);
      throw error; 
  }
};

export const login_me = async (formData : any) => {
  try {
    const response = await instance.post('/api/users/login', formData);
    return response.data;
  } catch (error) {
    console.log('error in login (service) => ', error);
  }
};

// export const fetchProducts = async (token: string) => {
//   try {
//     const response = await instance.get('/products/', {
//       headers: { Authorization: `Bearer ${token}` }, 
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// };

export const getServices = async (token: string) => {};