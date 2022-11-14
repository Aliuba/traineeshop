import React from 'react';
import "./home.scss"
import {goods} from "../Card/goods";
import Card from "../Card/Card";


const Home=()=> {

        return (
            <div className={'row'}>
                {goods.fruit.map(product=><Card key={product.id} product={product}/>)}
            </div>
        );


}

export default Home;
