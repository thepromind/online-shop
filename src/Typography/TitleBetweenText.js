import React from "react";



function TitleBetweenText({title, className = null, text}) {
return (
    <div className={`title-between-text ${className}`}>
        <span className="title"><span>{title}</span></span>
        <span className="text">{text}</span>
    </div>
);
}

export default TitleBetweenText;