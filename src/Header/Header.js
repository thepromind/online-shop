import React, { useState } from "react";
import './header.css';
import Button from '../components/Button';
import LinkMenu from '../components/LinkMenu';
import Search from "../components/Search";
import SideBar from '../components/SideBar';


function Header() {

const [isOpenSideBar, setIsOpenSideBar] = useState(false);


return (
    <header className="header">
        <div className="container-fluid">
            <div className="row special-row">
                <div className="col-md-3">
                    <a href="#" className="logotype">LOGO</a>
                    <Button 
                        text={'Каталог'}
                        className={'btn btn-primary'}
                        icon={'/icons/sr-bulletlist.svg#root'}
                        event={() => setIsOpenSideBar(true)}
                    />
                </div>
                <div className="col-md-6">
                    <Search/>
                </div>
                <div className="col-md-3">
                    <div className="d-flex-align-center gg-16">
                        <LinkMenu
                            icon={'/icons/sr-user.svg#root'}
                            text={'Войти'}
                        />
                        <LinkMenu
                            icon={'/icons/sr-bag-v1.svg#root'}
                            text={'Корзина'}
                        />
                        <LinkMenu
                            icon={'/icons/sr-hearth.svg#root'}
                            text={'Избранное'}
                        />
                    </div>
                </div>
            </div>
        </div>

		<div className="backdrp"></div>
        <SideBar/>
    </header>
);
}

export default Header;