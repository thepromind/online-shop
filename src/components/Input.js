import React from "react";



function Input({text, className = null, event = null, nameID = null, label}) {
    
    return (
        <div className="input-group">
            <label htmlFor={nameID}>{label}</label>
            <input 
                onChange={event} 
                id={nameID}
                className={`form-control ${className}`}
                placeholder={text}
            />
        </div>
    );
}

export default Input;