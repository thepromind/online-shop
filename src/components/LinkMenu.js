import React from "react";



function LinkMenu({icon, text, event}) {
return (
    <div className="link-menu" onClick={event}>
        <svg height="24" width="24">
            <use href={icon}></use>
        </svg>
        <span className="link-text">{text}</span>
    </div>
);
}

export default LinkMenu;