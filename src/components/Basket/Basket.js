import React from 'react';
import "./basket.scss"
import {Link} from "react-router-dom";

export const Basket = () => {

    return (
        <div>
            <h1>Basket</h1>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>count</th>
                    <th>+</th>
                    <th>-</th>
                    <th> del</th>
                </tr>
                </tbody>

            </table>
            <div className={"make_order"}>  <Link to={"/"}>
                    <button>Back</button>
                     </Link>
               <div> <button>Make order</button></div>
            </div>
        </div>
    )
        ;
}

