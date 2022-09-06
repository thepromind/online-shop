import React from "react";
import Breadcrumbs from '../components/Breadcrumbs';
import ImageShow from '../components/ImageShow';
import Card from '../components/Card';
import CardPrice from '../components/CardPrice';
import MainTitle from '../Typography/MainTitle';
import Title15 from '../Typography/Title15';
import TitleBetweenText from '../Typography/TitleBetweenText';
import StarVotes from '../components/StarVotes';


function ProductInner() {
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
                        <div className="navigate-right">
                            <span className="link-share">
                                
                                <svg height="24" width="24">
                                    <use href='/icons/sr-shareoption.svg#root'></use>
                                </svg>
                                
                            </span>
                        </div>
                    </div>

                    <div className="main-title">
                        <h1 className="main-inner-title">
                            <span>Сандалии для девочки, в садик, ортопедические, натуральная кожа, на платформе, летний подарок</span>
                        </h1>

                    </div>
                    
                    <div className="rates-review d-flex-al-center-space-between">
                        <div className="rates-review-left d-flex-align-center">
                            <StarVotes rating={3}/>
                            <span className="review-count">142 отзыва</span>
                        </div>
                        <div className="rates-review-right">
                            <span className="product-num">Код товара: 633900598</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <ImageShow/>
                </div>
                <div className="col-md-4">
                    <TitleBetweenText className="mb-16" title={'Состав'} text={'натуральная кожа'}/>
                    <TitleBetweenText className="mb-16" title={'Цвет'} text={'белый'}/>
                    <TitleBetweenText className="mb-16" title={'Гарантийный срок'} text={'2года'}/>
                    <a href="#" className="link-dash">Таблица размеров</a>
                </div>
                <div className="col-md-3">
                    <CardPrice/>
                </div>

                <div className="col-md-12 mt-64">
                    <div className="card-description">
                        <MainTitle className="mb-16" text={'О товаре'}/>
                        <div className="row">
                            <div className="col-md-5">
                                <Title15 className="mb-8" text={'Дополнительная информация'}/>
                                <TitleBetweenText className="mb-16" title={'Состав'} text={'натуральная кожа'}/>
                                <TitleBetweenText className="mb-16" title={'Состав'} text={'натуральная кожа'}/>
                                <TitleBetweenText className="mb-16" title={'Состав'} text={'натуральная кожа'}/>
                            </div>
                            <div className="col-md-4">
                                <Title15 className="mb-8" text={'Описание'}/>
                            </div>
                            <div className="col-md-3">
                                <Title15 className="mb-8" text={'О продавце'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mt-64">
                    <MainTitle className="mb-16" text={'Похожие товары'}/>
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


        </div>
    </div>
);
}

export default ProductInner;