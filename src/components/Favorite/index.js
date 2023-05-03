import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorites} = useSelector(state => state.favorites)
    return (
        <div className="py-10">
            <div className="flex flex-wrap gap-24 justify-center">
                {
                    favorites.map(el => <ProductCard el={el}/>)
                }
            </div>
        </div>
    );
};

export default Favorite;