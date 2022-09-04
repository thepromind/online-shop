import React from "react";
import Banner from '../components/Banner';
import Card from '../components/Card'
import Review from '../components/Review';
import Footer from '../Footer/Footer';
import MainTitle from '../Typography/MainTitle';

function Main() {
return (
    <main>
        <div className="container-fluid">
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

            <MainTitle text="Наши преимущества"/>

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

            <Footer/>

            <Review/>
        </div>
    </main>
);
}

export default Main;