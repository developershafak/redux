import { createSlice } from "@reduxjs/toolkit";
import { getPostalApi } from "../Actions/postalAction";

const initialState ={
    data:{},
    isLoading:false,
    isSuccess:false,
    errorMessage:""
}

const getPostalSlice = createSlice({
    name:"postal",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getPostalApi.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(getPostalApi.fulfilled,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= true;
            state.data= payload;
        }),
        builder.addCase(getPostalApi.rejected,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= false;
            state.errorMessage = payload;
        })
    }
  
})





export default getPostalSlice.reducer;