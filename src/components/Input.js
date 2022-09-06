import React from "react";



function Input({text, className = null, event = null}) {
    
    return (
        <input 
            onChange={event} 
            className={`input ${className}`}
            placeholder={text}
        />
    );
}

export default Input;