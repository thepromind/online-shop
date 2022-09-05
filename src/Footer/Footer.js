import React from "react";
// import './header.css';

function Footer() {
return (
    <footer className='pt-64'>
        <div className="container-fluid">
            <div className="row special-row">
                <div className='col-md-3 logo-container d-flex-align-center'>
                    <a href="#" className="logotype mtb-0 mr-0">LOGO</a>
                    <span>Open good values</span>
                </div>
                <div className="col-md-3 footer-store">
                    <h4 className='mb-8 mt-0'>Logo store</h4>
                    <ul>
                        <li><a href='#'>Каталок</a></li>
                        <li><a href='#'>О нас</a></li>
                        <li><a href='#'>Блог</a></li>
                        <li><a href='#'>Публичная оферта</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Политика конфиденциальности</a></li>
                        <li><a href='#'>Пользовательское соглашение</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4 className='mb-8 mt-0'>Наши партнеры</h4>
                    <ul>
                        <li><a href="#">Aliexpress</a></li>
                        <li><a href="#">Taobao</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4 className='mb-8 mt-0'>Контакты</h4>
                    <ul>
                        <li><a href="#">+7 (777) 790 99 11</a></li>
                        <li><a href="#">info@logo.store</a></li>
                    </ul>
                </div>
            </div>
            <div className='row specisal-row footer-bottom '>
                <div className='d-flex-al-center-space-between ptb-16 col-md-10 mtb-auto-0'>
                    <span>Logo Store 2021</span>
                    <span>Русский</span>
                </div>
            </div>
        </div>
    </footer>
);
}

export default Footer;