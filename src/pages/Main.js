import React from "react";
import Banner from '../components/Banner';
import Card from '../components/Card'
import Review from '../components/Review';
import SideCats from '../components/SideCats';
import YouSearch from '../components/YouSearch';
import Footer from '../Footer/Footer';
import MainTitle from '../Typography/MainTitle';

function Main() {
return (
    <main>
        <div className="container-fluid">
            <Banner/>

            <div className="ptb-64">
            <MainTitle className="mb-16" text={'Хиты продаж'}/>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '25px'}}>
                    <Card 
                        backgroundImage={'url(../images/products/product-1.png'}
                        name={'Dates Box'}
                        type={'Футболки'}
                        price={'6 790'}
                        percent={'25%'}
                        priceWithoutPercent={'4 490'}
                    />
                    <Card 
                        backgroundImage={'url(../images/products/product-1.png'}
                        name={'Dates Box'}
                        type={'Футболки'}
                        price={'6 790'}
                    />
                    <Card 
                        backgroundImage={'url(../images/products/product-1.png'}
                        name={'Dates Box'}
                        type={'Футболки'}
                        price={'6 790'}
                        percent={'25%'}
                        priceWithoutPercent={'4 490'}
                    />
                    <Card 
                        backgroundImage={'url(../images/products/product-1.png'}
                        name={'Dates Box'}
                        type={'Футболки'}
                        price={'6 790'}
                    />
                    <Card 
                        backgroundImage={'url(../images/products/product-1.png'}
                        name={'Dates Box'}
                        type={'Футболки'}
                        price={'6 790'}
                        percent={'25%'}
                        priceWithoutPercent={'4 490'}
                    />
                </div>
            </div>
        </div>

            <div className='advantage ptb-64'>
                <div className="container-fluid">
                <MainTitle className='mb-40' text="Наши преимущества"/>
                <div className='advantage-inner'>
                    <div className="advantage-card">
                        <svg height="48" width="auto">
                            <use href='/images/special-icons/ic_delivery.svg#root'></use>
                        </svg>
                        <div className="advantage-info">
                            <h4 className='advantage-title'>Доставка день-в-день</h4>
                            <p>в 18 городах</p>
                        </div>
                    </div>
                    <div className="advantage-card" style={{ backgroundImage: "url(../images/patterns/pattern-adventeges-1.png)"}}>
                        <svg height="48" width="48">
                            <use href='/images/special-icons/ic_phone.svg#root'></use>
                        </svg>
                        <div className="advantage-info">
                            <h4 className='advantage-title'>App</h4>
                            <p>Проект команды Logo App https://logo.app</p>
                        </div>
                    </div>
                    <div className="advantage-card">
                        <svg height="48" width="48">
                            <use href='/images/special-icons/ic_pack.svg#root'></use>
                        </svg>
                        <div className="advantage-info">
                            <h4 className='advantage-title'>Продукция</h4>
                            <p>Мы продаем продукцию только с пользой и со смыслом</p>
                        </div>
                    </div>
                    <div className="advantage-card">
                        <svg height="48" width="48">
                            <use href='/images/special-icons/ic_phone.svg#root'></use>
                        </svg>
                        <div className="advantage-info">
                            <h4 className='advantage-title'>Садака</h4>
                            <p>С каждой продажи мы перечисляем на боаготворительность</p>
                        </div>
                    </div>
                    <div className="advantage-card">
                        <svg height="48" width="48">
                            <use href='/images/special-icons/ic_phone.svg#root'></use>
                        </svg>
                        <div className="advantage-info">
                            <h4 className='advantage-title'>Logo-App</h4>
                            <p>Покупки онлайн и все такое</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="ptb-64" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: '1fr 1fr', gridGap: '25px'}}>
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                    percent={'25%'}
                    priceWithoutPercent={'4 490'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                    percent={'25%'}
                    priceWithoutPercent={'4 490'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                    percent={'25%'}
                    priceWithoutPercent={'4 490'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                    percent={'25%'}
                    priceWithoutPercent={'4 490'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                    percent={'25%'}
                    priceWithoutPercent={'4 490'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                />
                <Card 
                    backgroundImage={'url(../images/products/product-1.png'}
                    name={'Dates Box'}
                    type={'Футболки'}
                    price={'6 790'}
                    percent={'25%'}
                    priceWithoutPercent={'4 490'}
                />
            </div>
        </div>
    </main>
);
}

export default Main;