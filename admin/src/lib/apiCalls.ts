import axios from 'axios';

const api = "http://localhost:3000/api/admin"

// export const acceptProvider = async (providerId : Number, token : string) => {
//     try {
//       const response = await axios.get(`${api}/acceptProviderRegistration/${providerId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error accepting provider (apiCalls):', error);
//       throw error;
//     }
//   };

  export const acceptProvider = async (providerId : Number) => {
    try {
      const response = await axios.post(`${api}/acceptProviderRegistration/${providerId}`);
      return response.data;
    } catch (error) {
      console.error('Error accepting provider (apiCalls):', error);
      throw error;
    }
  };
  