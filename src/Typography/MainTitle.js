import React from "react";



function MainTitle({text, className = null}) {
return (
    <h2 className={`h2-title ${className}`}>
        {text}
    </h2>
);
}

export default MainTitle;