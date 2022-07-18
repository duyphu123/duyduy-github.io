import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/auth.api";
import { payloadCreator } from '../../utils/helper'
import LocalStorage from '../../constants/localStorage'

export const register = createAsyncThunk(
  "auth/register",
  payloadCreator(authApi.register)
)
export const login = createAsyncThunk(
  'auth/login',
  payloadCreator(authApi.login)
)
const handleAuthFulfilled = (state, action) => {
  const { user, access_token } = action.payload.data
  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, access_token)
}
const auth = createSlice({
  name: "auth",
  initialState: {
    profile: localStorage.getItem(LocalStorage.user) || {},
    extraReducers: {
      
        [register.fulfilled]:handleAuthFulfilled
      }
  },
});
const authReducer = auth.reducer

export default authReducer