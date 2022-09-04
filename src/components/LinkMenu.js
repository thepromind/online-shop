import React from "react";



function LinkMenu({icon, text}) {
return (
    <div className="link-menu">
        <svg height="24" width="24">
            <use href={icon}></use>
        </svg>
        <span className="link-text">{text}</span>
    </div>
);
}

export default LinkMenu;