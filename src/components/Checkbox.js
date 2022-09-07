import React from "react";



function Checkbox({className = null, event = null, nameID = null, label}) {
return (
    <div className="checkbox">
        <input type="checkbox" className={`checkbox-input ${className}`} id={nameID} />
        <label htmlFor={nameID}>
            <span>{label}</span>
        </label>
    </div>
);
}

export default Checkbox;