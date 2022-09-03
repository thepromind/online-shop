import React from "react";
import './header.css';
import Button from '../components/Button';


function Header() {
return (
    <header>
        <div className="container-fluid">
            <div className="row special-row">
                <a href="#">LOGO</a>
                <div className="col-num-1">
                <button className="btn btn-primary">
                    <svg height="24" width="24">
                        <use href="/icons/sr-bulletlist.svg#root"></use>
                    </svg>
                    Каталог
                </button>
                </div>
                <div className="col-num-2">

                </div>
                <div className="col-num-3">

                </div>
            </div>
        </div>
    </header>
);
}

export default Header;