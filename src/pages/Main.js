import React from "react";
import Accordion from '../components/Accordion';
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
            <Accordion/>
            <Banner/>

            <MainTitle text={'Хиты продаж'}/>
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

            <div className='advantage ptb-64'>
                <MainTitle className='mb-40' text="Наши преимущества"/>
                <div className='advantage-inner'>
                    <div className="advantage-card">
                        <svg height="20" width="20">
                            <use href='/icons/sr-placemarker-20.svg#root'></use>
                        </svg>
                        <h4 className='mtb-8'>Доставка день-в-день</h4>
                        <span>в 18 городах</span>
                    </div>
                    <div className="advantage-card">
                        <svg height="20" width="20">
                            <use href='/icons/sr-placemarker-20.svg#root'></use>
                        </svg>
                        <h4 className='mtb-8'>App</h4>
                        <span>Проект команды Logo App https://logo.app</span>
                    </div>
                    <div className="advantage-card">
                        <svg height="20" width="20">
                            <use href='/icons/sr-placemarker-20.svg#root'></use>
                        </svg>
                        <h4 className='mtb-8'>Продукция</h4>
                        <span>Мы продаем продукцию только с пользой и со смыслом</span>
                    </div>
                    <div className="advantage-card">
                        <svg height="20" width="20">
                            <use href='/icons/sr-placemarker-20.svg#root'></use>
                        </svg>
                        <h4 className='mtb-8'>Садака</h4>
                        <span>С каждой продажи мы перечисляем на боаготворительность</span>
                    </div>
                    <div className="advantage-card">
                        <svg height="20" width="20">
                            <use href='/icons/sr-placemarker-20.svg#root'></use>
                        </svg>
                        <h4 className='mtb-8'>Logo-App</h4>
                        <span>Покупки онлайн и все такое</span>
                    </div>
                </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: '1fr 1fr', gridGap: '25px'}}>
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