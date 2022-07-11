import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/auth.api";
import { payloadCreator } from '../../utils/helper'
import LocalStorage from '../../constants/localStorage'

export const register = createAsyncThunk(
  "auth/register",
  payloadCreator(authApi.register)
)
const auth = createSlice({
  name: "auth",
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {},
    extraReducers: {
      
        [register.fulfilled]: (state, action) => {
          state.profile = action.payload.data
          localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
        }
      }
  },
});
const authReducer = auth.reducer

export default authReducer