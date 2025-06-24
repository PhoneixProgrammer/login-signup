//createAsyncThunk to handle async actions
//Fteching user data from an API
//sending login information to an API
//Posting user data to an API

import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// async thunk to fetch users 
export const fetchUsers = createAsyncThunk('users/fetchUsers',async()=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
})

const userSlice = createSlice({
    name : 'user',
    initialState:{
        list :[],
        loading :  false,
        error : null
    },
    reducers : {},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUsers.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled,(state,action)=>{
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected,(state,action)=>{
                state.loading = false;
                state.error = 'Failed to fetch users';
            })
    }
});

export default userSlice.reducer;