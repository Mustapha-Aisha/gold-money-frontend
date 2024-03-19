import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "../../helpers/authService"

const initialState = {
    isLoading: false,
    error: "",
    userDetails: {}
}

export const userLogin = createAsyncThunk("login", async(data, thunkAPI) => {
    try {
        const res = await AuthService.login(data);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("An error occured")
    }
})
export const register = createAsyncThunk("register", async(data, thunkAPI) => {
  try {
      const res = await AuthService.register(data);
      return res.data;
  } catch (error) {
      return thunkAPI.rejectWithValue("An error occured")
  }
})

export const resetPassword = createAsyncThunk("resetPassword", async(data, thunkAPI) => {
    try {
        const res = await AuthService.resetPassword(data);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("An error occured")
    }
})


const authSlice = createSlice({
    name: 'auth',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder
        //login
          .addCase(userLogin.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userDetails = action.payload;
          })
          .addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          
          //reset password
          .addCase(resetPassword.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userDetails = action.payload;
          })
          .addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          //register
          .addCase(register.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userDetails = action.payload;
          })
          .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
    }
})

export default authSlice.reducer