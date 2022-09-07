import React from "react";



function TabLink({className = null, icon = null, text, size = null}) {
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
    <div className={`tab-link ${className}`}>
        {renderSVG(icon)}
        {text}
    </div>
);
}

export default TabLink;