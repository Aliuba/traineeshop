import React from 'react';

import './card.scss'

import {useNavigate} from "react-router-dom";


const Card=(props)=>{
    const {product, onAdd} = props
    const navigate = useNavigate();
     const navigateProduct = (id) => {
        // 👇️ navigate to /product
        navigate(`/card/${id}`);

    };
    {
        return (
            <div>
                <div className={'column'}>
                    <div className={"center"}><img className={'small'} src={product.image}></img> </div>
                    <div className={'center'}>{product.name}</div>
                    <div className={'center'}>₴{product.price}</div>
                    <button onClick={()=>navigateProduct(product.id)}>see more</button>
                    <button onClick={()=>onAdd(product)}>Add to basket</button>
                </div>
            </div>
        );
    }
}

export default Card;