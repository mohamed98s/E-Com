import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@types";


interface IAuthState {
    loading: TLoading,
    error: string | null
}

const initialState: IAuthState = {
    loading: 'idle',
    error: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: () => {

    }
})


export default authSlice.reducer