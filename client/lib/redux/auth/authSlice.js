
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },

  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    
  },
});

export const { setAuthentication } = authSlice.actions;
export default authSlice.reducer;
