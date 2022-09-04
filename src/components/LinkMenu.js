import React from "react";



function LinkMenu() {
return (
    <div className="link-menu">
        <svg height="24" width="24">
            <use href="/icons/sr-user.svg#root"></use>
        </svg>
        <span className="link-text">Войти</span>
    </div>
);
}

export default LinkMenu;