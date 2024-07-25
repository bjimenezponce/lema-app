import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userState: {
    email: string;
    name: string;
  };
}

/**
 * Default state object with initial values.
 */
const initialState: UserState = {
  userState: {
    name: "Sulhadin",
    email: "sulhadin@gmail.com",
  },
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.userState.name>
    ) => {
      state.userState.name = action.payload;
    },
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.userState.email>
    ) => {
      state.userState.email = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setName, setEmail } = userSlice.actions;
export const userReducer = userSlice.reducer;
