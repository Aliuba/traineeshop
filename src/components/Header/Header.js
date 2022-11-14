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
                        <button>Card</button>
                    </Link>
                </div>
                <div>
                    <h3>Basket</h3>
                </div>

            </header>
        );
    }
}

export default Header;