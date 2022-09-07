import React from "react";
import Breadcrumbs from '../components/Breadcrumbs';
import Card from '../components/Card';
import MainTitle from '../Typography/MainTitle';
import Title15 from '../Typography/Title15';
import ChooseTab from '../components/ChooseTab';
import Checkbox from '../components/Checkbox';
import FilterPrice from '../components/FilterPrice';
import Button from '../components/Button';
import Accordion from '../components/Accordion';


function SubCatsInner() {
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
                            <span>Мужские туфли и лоферы</span>
                        </h1>

                    </div>
                    
                   
                </div>

                <div className="col-md-2">
                    <Title15 className="mb-12" text={'Категории'}/>
                    <div className="grid-list-8 mb-16">
                        <Checkbox label={"Туфли"} nameID={"cat-1"}/>
                        <Checkbox label={"Лоферы"} nameID={"cat-2"}/>
                        <Checkbox label={"Кроссы"} nameID={"cat-3"}/>
                        <Checkbox label={"Макасины"} nameID={"cat-4"}/>
                    </div>
                    <Title15 className="mb-12" text={'Цена'}/>
                    <FilterPrice className={"mb-12"} />
                    <Button 
                        text={'Применить'}
                        className={'btn btn-primary btn-dark btn-28 w-100'}
                    />
                </div>
                <div className="col-md-10">
                    <div className="sort-filter gg-16 mb-24">
                        <span className="sort-filter-text">Сортировать по:</span>
                        <div className="choose-tab">
                            <ChooseTab tab={"Популярности"} className="active" />
                            <ChooseTab tab={"Рейтингу"} className="" />
                            <ChooseTab tab={"Обновлению"} className="" />
                        </div>
                    </div>
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
                        />
                    </div>
                </div>


            </div>


        </div>
    </div>
);
}

export default SubCatsInner;