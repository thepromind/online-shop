import React from "react";



function LinkMenu() {
return (
    <nav className="nav-top">
        <div className="container-fluid">
            <div className="nav-row">
                <div className="nav-left">
                    <select>
                        <option value="en">en</option>
                        <option value="ru">ru</option>
                    </select>
                    <div className="select-city">
                        <svg height="20" width="20">
                            <use href='/icons/sr-placemarker-20.svg#root'></use>
                        </svg>
                        <span>Алматы</span>
                    </div>
                </div>
                <div className="nav-right">
                    <a href="#!" className="link">Новости</a>
                    <a href="#!" className="link">Помощь</a>
                </div>
            </div>
        </div>
    </nav>
);
}

export default LinkMenu;