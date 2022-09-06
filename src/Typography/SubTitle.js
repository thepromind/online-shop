import React from "react";



function SubTitle({text, className = null}) {
return (
    <p className={`p-subtitle ${className}`}>
        {text}
    </p>
);
}

export default SubTitle;