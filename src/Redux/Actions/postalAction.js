import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getPostalApi = createAsyncThunk(
    "postal/getPostalApi",
    async(pincode,{rejectWithValue})=>{

        // console.log(pincode);

        try {
            const {data} = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
            return data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)