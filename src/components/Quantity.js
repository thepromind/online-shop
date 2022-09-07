import React from "react";



function Quantity({className = null, event = null, nameID = null, label}) {
return (
    <div className="quantity">
        <span className="qty-btn minus disabled">
            <svg height="24" width="24">
                <use href='/icons/sr-minus.svg#root'></use>
            </svg>
        </span>
        <span className="qty-text"> 1 </span>
        <span className="qty-btn plus">
            <svg height="24" width="24">
                <use href='/icons/sr-plus.svg#root'></use>
            </svg>
        </span>
    </div>
);
}

export default Quantity;