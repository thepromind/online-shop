import React from "react";



function ChooseTab({className = null, tab = null}) {
return (
    <div className={`tab-select ${className}`}>
        {tab}
    </div>
);
}

export default ChooseTab;