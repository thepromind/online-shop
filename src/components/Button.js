import React from "react";



function Button({text, className = null, icon = null, event = null, size = null}) {

    const renderSVG = (icon) => {
        if(icon) {
            return (
                <svg height={size} width={size}>
                    <use href={icon}></use>
                </svg>
            )
        } else {
            return null
        }
    }
    
    return (
        <button onClick={event} className={`${className}`}>
            {renderSVG(icon)}
            {text}
        </button>
    );
}

export default Button;