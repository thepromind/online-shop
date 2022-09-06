import React from "react";
import Breadcrumbs from '../components/Breadcrumbs';
import Card from '../components/Card';
import MainTitle from '../Typography/MainTitle';
import Title15 from '../Typography/Title15';
import CardCategory from '../components/CardCategory';
import SideCats from '../components/SideCats';


function CatsInner() {
return (
    <div className="wrapper">
        <div className="container-fluid">
            <div className="row">

                <div className="com-md-12 mb-24">

                    <div className="navigate-breadcrumbs d-flex-al-center-space-between ptb-24">
                        <div className="navigate-left d-flex-align-center gg-16">
                            <span className="link-back">

                                <svg height="24" width="24">
                                    <use href='/icons/sr-arrow-left.svg#root'></use>
                                </svg>

                            </span>
                            <Breadcrumbs/>
                        </div>
                        {/* <div className="navigate-right">
                            <span className="link-share">
                                
                                <svg height="24" width="24">
                                    <use href='/icons/sr-shareoption.svg#root'></use>
                                </svg>
                                
                            </span>
                        </div> */}
                    </div>

                    <div className="main-title mb-16">
                        <h1 className="main-inner-title">
                            <span>Мужчинам</span>
                        </h1>

                    </div>
                    
                   
                </div>

                <div className="col-md-2">
                    <Title15 className="mb-12" text={'Категории'}/>
                    <SideCats/>
                </div>
                <div className="col-md-10">
                    <div className="grid-max mb-40">
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                        <CardCategory text={"Кофта"} backgroundImage={'url(../images/products/product-1.png'} />
                    </div>
                    <MainTitle className="mb-16" text={'Одежда'}/>
                    <div className="grid-max">
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
                            percent={'25%'}
                            priceWithoutPercent={'4 490'}
                        />
                    </div>
                </div>


            </div>


        </div>
    </div>
);
}

export default CatsInner;