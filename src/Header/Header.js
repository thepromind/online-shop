import React from "react";
import './header.css';
import Button from '../components/Button';
import LinkMenu from '../components/LinkMenu';


function Header() {
return (
    <header>
        <div className="container-fluid">
            <div className="row special-row">
                <a href="#№">LOGO</a>
                <div className="col-num-1">
                    <Button 
                        text={'Каталог'}
                        className={'btn btn-primary'}
                        icon={'/icons/sr-bulletlist.svg#root'}
                    />
                    <Button
                        text={'Каталог'}
                        className={'btn btn-secondary'}
                    />
                </div>
                <div className="col-num-2">

                </div>
                <div className="col-num-3">
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
    </header>
);
}

export default Header;