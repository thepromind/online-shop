import React from "react";
import Breadcrumbs from '../components/Breadcrumbs';
import Card from '../components/Card';
import MainTitle from '../Typography/MainTitle';
import Title15 from '../Typography/Title15';
import ChooseTab from '../components/ChooseTab';
import Checkbox from '../components/Checkbox';
import BasketList from '../components/BasketList';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import Input from "../components/Input";


function Basket() {
return (
    <div className="wrapper">
        <div className="container-fluid">
            <div className="row">

                <div className="com-md-12 mb-24">
                
                    <div className="main-title ptb-24">
                        <h1 className="main-inner-title">
                            <span>Корзина</span>
                        </h1>
                    </div>
                   
                </div>

                <div className="col-md-9">
                    {/* Card Basket */}
                    <div className="card-basket mb-32">
                        <div className="card-basket-header gg-24">
                            <Checkbox label={"Выбрать все"} nameID={"selectAll"}/>
                            <Button 
                                text={'Удалить выбранные'}
                                className={'btn btn-auto-link danger-color'}
                            />
                        </div>
                        <div className="card-basket-body gg-12">
                            <BasketList 
                            title={"Мужские зауженные джинсы стандартной посадки / Однотонные / Повседневные / Широкие Мужские зауженные джинсы стандартной посадки / Однотонные /  ТВОЕ Повседневные Повседневные Повседневные Широкиеggf  ТВОЕ Повседневные Повседневные Повседневные Широкие, ТВОЕ Повседневные Повседневные Повседневные Широкие, ТВОЕ"}
                            finalPrice={"31 950 〒"}
                            salePrice={"41 950 〒"}
                            saleNum={"10 000 〒"}
                            />
                            <BasketList 
                            title={"Мужские зауженные джинсы стандартной посадки / Однотонные / Повседневные / Широкие Мужские зауженные джинсы стандартной посадки / Однотонные /  ТВОЕ Повседневные Повседневные Повседневные Широкиеggf  ТВОЕ Повседневные Повседневные Повседневные Широкие, ТВОЕ Повседневные Повседневные Повседневные Широкие, ТВОЕ"}
                            finalPrice={"31 950 〒"}
                            salePrice={"41 950 〒"}
                            saleNum={"10 000 〒"}
                            />
                            <BasketList 
                            title={"Мужские зауженные джинсы стандартной посадки / Однотонные / Повседневные / Широкие Мужские зауженные джинсы стандартной посадки / Однотонные /  ТВОЕ Повседневные Повседневные Повседневные Широкиеggf  ТВОЕ Повседневные Повседневные Повседневные Широкие, ТВОЕ Повседневные Повседневные Повседневные Широкие, ТВОЕ"}
                            finalPrice={"31 950 〒"}
                            salePrice={"41 950 〒"}
                            saleNum={"10 000 〒"}
                            />
                        </div>
                    </div>

                    {/* Delivery */}
                    <div className="mb-32">
                        <MainTitle className={"mb-24"} text={"Способ получения"} />
                        <Title15 className={"mb-12"} text={"Выберите способ доставки"} />
                        <div className="choose-tab mb-24">
                            <ChooseTab tab={"Самовывоз"} className="active" />
                            <ChooseTab tab={"Доставка курьером"} className="" />
                        </div>

                        <div className="form-delivery mb-12">
                            <Input label={"Область"} nameID={"region"} text={'hello@example.com'} className={'w-100'}/>
                            <Input label={"Город"} nameID={"city"} text={'hello@example.com'} className={'w-100'}/>
                            <Input label={"Почтовый индекс"} nameID={"zipNum"} text={'hello@example.com'} className={'w-100'}/>
                            <Input label={"Адрес"} nameID={"address"} text={'hello@example.com'} className={'w-100'}/>
                            <Input label={"Дом"} nameID={"house"} text={'hello@example.com'} className={'w-100'}/>
                            <Input label={"Квартира"} nameID={"flat"} text={'hello@example.com'} className={'w-100'}/>
                        </div>
                        <Checkbox label={"Запомнить адрес"} nameID={"rememberAddress"}/>
                    </div>
                    <div className="payment-method">
                        <MainTitle className={"mb-24"} text={"Способ получения"} />
                        
                        <Button 
                            text={'Добавить другую карту'}
                            size="24"
                            icon={"/icons/sr-card.svg#root"}
                            className={'btn btn-auto-link primary-color'}
                        />
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card-final-price">
                        <div className="final-price-num">
                            <span>Итого</span>
                            <span>93 950 〒</span>
                        </div>
                        <div className="final-detail">
                            <div className="final-detail-row">
                                <span>Товары, 3 шт.</span>
                                <span className="detail-row-main">125 850 〒</span>
                            </div>
                            <div className="final-detail-row">
                                <span>Скидка</span>
                                <span className="detail-row-main">– 20 850 〒</span>
                            </div>
                            <div className="final-detail-row">
                                <span>Доствка</span>
                                <span className="detail-row-main">Бесплатно</span>
                            </div>
                        </div>
                        <Button 
                            text={'Заказать'}
                            className={'btn btn-primary w-100'}
                        />
                    </div>
                </div>


            </div>


        </div>
    </div>
);
}

export default Basket;