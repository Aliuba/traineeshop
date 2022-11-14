import React, {Component} from 'react';
import "./header.scss"
import Card from "../Card/Card";
import {Link} from "react-router-dom";

const Header = () => {
    {
        return (
            <header className={'row-header block '}>
                <div>
                    <Link to={"/card"}>
                        <h3>Card</h3>
                    </Link>
                </div>
                <div>
                     <Link to={"/basket"}>
                    <h3>Basket</h3>
                     </Link>
                </div>

            </header>
        );
    }
}

export default Header;