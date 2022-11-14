import React from 'react';
import "./cardInfo.scss"
import {goods} from "../Card/goods";
import {useParams} from "react-router-dom";
import Card from "../Card/Card";

export const CardInfo = () => {

    const {id} = useParams();
    const f=goods.fruit.find(f=>f.id==id)
    {
        return (
            <div>


                        <div className={'column'}>
                            <div className={"center"}><img className={'small'} src={f.image}></img></div>
                            <div className={'center'}>{f.name}</div>
                            <div className={'center'}>₴{f.price}</div>

                            <button >Add to basket</button>
                        </div>


            </div>
        );
    }
}

