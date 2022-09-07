import React from "react";
import Breadcrumbs from '../components/Breadcrumbs';
import Card from '../components/Card';
import MainTitle from '../Typography/MainTitle';
import Title15 from '../Typography/Title15';
import ChooseTab from '../components/ChooseTab';
import CardOrders from '../components/CardOrders';
import TabLink from '../components/TabLink';
import Button from '../components/Button';
import Accordion from '../components/Accordion';


function Profile() {
return (
    <div className="wrapper ptb-64">
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-2">
                    <div className="profile-name mb-12">
                        <div className="profile-image mb-12">
                            <div className="profile-img" style={{ backgroundImage: "url(../images/products/product-1.png)"}}></div>
                            <Button 
                                text={'Выйти'}
                                className={'btn btn-auto-link danger-color'}
                            />
                        </div>
                        <h4 className="name-text">Алимжан Алимжанов</h4>
                    </div>
                    <div className="tab-list">
                        <TabLink text={"Покупки"} size="20" icon={'/icons/sr-hearth-20.svg#root'} />
                        <TabLink className={"active"} text={"Избранное "} size="20" icon={'/icons/sr-hearth-20.svg#root'} />
                        <TabLink text={"Настройки"} size="20" icon={'/icons/sr-hearth-20.svg#root'} />
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="content-tab">
                        {/* Страница в адресной строке меняется по типу localhost/purchases */}
                        {/* <div className="grid-max">
                            <CardOrders 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                percent={'Возврат'}
                                statusBadge={"l-hot"}
                                priceWithoutPercent={'4 490'}
                            />
                            <CardOrders 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                percent={'Доставлен'}
                                statusBadge={"deleviry-badge"}
                                priceWithoutPercent={'4 490'}
                            />
                            <CardOrders 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                percent={'Доставлен'}
                                statusBadge={"deleviry-badge"}
                                priceWithoutPercent={'4 490'}
                            />
                            <CardOrders 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                percent={'Доставлен'}
                                statusBadge={"deleviry-badge"}
                                priceWithoutPercent={'4 490'}
                            />
                            <CardOrders 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                percent={'Доставлен'}
                                statusBadge={"deleviry-badge"}
                                priceWithoutPercent={'4 490'}
                            />
                        </div> */}

                        {/* Страница в адресной строке меняется по типу localhost/favorite */}
                        <div className="grid-max">
                            <Card 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                favorite={"show"}
                                hearth={"hearth-full"}
                            />
                            <Card 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                favorite={"show"}
                                hearth={"hearth-full"}
                            />
                            <Card 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                favorite={"show"}
                                hearth={"hearth-full"}
                            />
                            <Card 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                favorite={"show"}
                                hearth={"hearth-full"}
                            />
                            <Card 
                                backgroundImage={'url(../images/products/product-1.png'}
                                name={'Dates Box'}
                                type={'Футболки'}
                                price={'6 790'}
                                favorite={"show"}
                                hearth={"hearth-full"}
                            />
                        </div>

                    </div>
                </div>


            </div>


        </div>
    </div>
);
}

export default Profile;