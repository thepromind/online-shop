import React from "react";



function FilterPrice({className = null, event = null, nameID = null, label}) {
return (
    <div className={`filter-price gg-24 ${className}`}>
        <div className="filter-price-left">
            <span>от</span>
            <input type="text" placeholder="10 ₸"  />
        </div>
        <div className="filter-price-right">
            <span>до</span>
            <input type="text" placeholder="10 000 000 ₸"  />
        </div>
    </div>
);
}

export default FilterPrice;