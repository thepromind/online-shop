import React, { useState } from "react";
import './header.css';
import Button from '../components/Button';
import LinkMenu from '../components/LinkMenu';
import Search from "../components/Search";
import SideBar from '../components/SideBar';
import Modalauthorization from '../components/Modalauthorization';


function Header() {

const [isOpenSideBar, setIsOpenSideBar] = useState(false);
const [isOpenModalAutorization, setIsOpenModalAutorization] = useState(false)
const [isSendMail, setIsSendMail] = useState(false)


return (
    <header className="header">
        <div className="container-fluid">
            <div className="row special-row">
                <div className="col-md-3">
                    <a href="#" className="logotype mr-16">LOGO</a>
                    <Button 
                        text={'Каталог'}
                        size={"24"}
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
                            event={() => setIsOpenModalAutorization(true)}
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

		<div className={`backdrp ${isOpenSideBar ? 'show' : ''}`} onClick={() => setIsOpenSideBar(false)}></div>
        <SideBar isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar}/>

        <Modalauthorization isOpenModalAutorization={isOpenModalAutorization} setIsOpenModalAutorization={setIsOpenModalAutorization} isSendMail={isSendMail} setIsSendMail={setIsSendMail} />
    </header>
);
}

export default Header;