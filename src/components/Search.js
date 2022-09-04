import React from "react";



function Search() {
return (
    <div className="search-input">
        <input placeholder="Я ищу..." className="search-inner" type="text" />
        <button className="btn btn-primary btn-search">
                
            <svg height="24" width="24">
                <use href='/icons/sr-search.svg#root'></use>
            </svg>
        
        </button>
    </div>
);
}

export default Search;