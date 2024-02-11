import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPostalApi } from "../Redux/Actions/postalAction";
const Home = () => {
    const dispatch = useDispatch();

    const [pincode, setPincode] = useState()
    console.log(pincode);
    const { data, errorMessage, isSuccess, isLoading } = useSelector(state => state.postal);
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-auto min-h-screen bg-slate-300">
                <input type="number" className="w-1/2 p-2" onChange={(e) => setPincode(e.target.value)} />
                <button className="p-4 bg-green-600 " onClick={() => dispatch(getPostalApi(pincode))}>Get Post Office</button>
                <div className="w-full h-auto mt-10">

                    {
                        !isLoading &&
                        JSON.stringify(data)
                    }
                    {
                        isLoading &&
                        <h1 className="text-3xl "> Loading</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Home