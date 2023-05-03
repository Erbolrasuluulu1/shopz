import React from 'react';
import {useDispatch} from "react-redux";

const BasketTable = ({el}) => {
    const dispatch = useDispatch()
    const delBasket = () => {
        dispatch({type:"DELETE_BASKET", payload:el})
    }
    const addBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const decBasket  = () => {
        dispatch({type: "DEC_BASKET", payload: el})
    }
    return (
        <tr className=" border-2 rounded-b text-white">
            <th scope="col" className="px-6 py-3">
                <img src={el.image} width={100} alt=""/>
            </th>
            <th scope="col" className="px-6 py-3 text-zinc-950">
                {el.title}
            </th>
            <th scope="col" className="px-6 py-3">
                <div className="flex select-none">
                    <button onClick={decBasket} className="text-zinc-950">-</button>
                    <p className="mx-4 text-zinc-950">{el.count}</p>
                    <button onClick={addBasket} className="text-zinc-950">+</button>
                </div>
            </th>
            <th  scope="col" className="px-6 py-3 text-zinc-950 select-none">
                {el.price * el.count}$
            </th>
            <th scope="col" className="px-6 py-3">
                <button onClick={delBasket} type="button"
                        className="focus:outline-none text-white bg-red-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default BasketTable;