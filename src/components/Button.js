import React from "react";



function Button() {
    
return (
    <button className="btn btn-primary">
        <svg height="24" width="24">
            <use href="/icons/sr-bulletlist.svg#root"></use>
        </svg>
        Каталог
    </button>
);
}

export default Button;