// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: User | null; // User can be null or a dynamic object
}

type User = Record<string, any>; // Dynamic user type

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Set user with dynamic fields
    },
    removeUser: (state) => {
      state.user = null; // Clear the user
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
