import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()

    const getDetails = () => {
        return axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setDetails(res.data))
    }
    useEffect(() => {getDetails()}, [])
    console.log(details)
    return (
        <div className="flex justify-center py-[50px] min-h-[90vh]">
            <div className="flex items-center w-[70%] justify-between">
                <div className='relative'>
                    <h2 className="top-[-10px] text-yellow-500 shadow-zinc-50 text-1xl flex absolute z-10 items-center justify-center bg-blue-600 w-[80px] h-[80px]  ml-[300px] font-bold tracking-tight text-gray-900 dark:text-amber-300">{details.price}$</h2>
                    <img className="mx-28 mt-20  z-0   rounded-2xl " src={details.image} width={250} alt="img"/>
                </div>
                    <div className="flex flex-col ml-[250px]  justify-between p-4 leading-normal">
                        <div className="flex  mb-12 justify-end pt-[10px]">
                            <Link to={"/product"}>
                                <button
                                    className="text-black text-4xl">
                                    X
                                </button>
                            </Link>
                        </div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{details.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details.description}</p>
                        <div className="flex justify-between">
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span className="text-blue-700">category :</span> {details.category}</h3>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ProductDetails;