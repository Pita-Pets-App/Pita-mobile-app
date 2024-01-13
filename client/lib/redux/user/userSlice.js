
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    username: '',
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUserId, setUsername } = userSlice.actions;
export default userSlice.reducer;
