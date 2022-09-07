import React from "react";
import Checkbox from '../components/Checkbox';
import Quantity from '../components/Quantity';
import Button from "./Button";



function BasketList({className = null, finalPrice, title, salePrice, saleNum }) {
return (
    <div className={`basket-list ${className}`}>
        <Checkbox nameID={"chooseOne"} />
        <div className="basket-img" style={{ backgroundImage: "url(../images/products/product-1.png)"}}></div>
        <div className="basket-info">
            <h4>{title}</h4>
            <div className="info-more">
                <div>
                    <span>Цвет:</span>
                    <span>белый</span>
                </div>
                <div>
                    <span>Размер:</span>
                    <span>L</span>
                </div>
            </div>
            <div className="basket-actions">
                <Button 
                    text={'В избранное'}
                    size={"20"}
                    icon={'/icons/sr-hearth-20.svg#root'}
                    className={'btn btn-auto-link primary-color'}
                />
                <span className="line-16"></span>
                <Button 
                    text={'Удалить'}
                    size={"20"}
                    icon={'/icons/sr-trash.svg#root'}
                    className={'btn btn-auto-link danger-color'}
                />
            </div>
        </div>
        <div className="basket-quantity">
            <Quantity />
        </div>
        <div className="basket-price">
            <h4>{finalPrice}</h4>
            <div className="info-more">
                <span className="sale-price">{salePrice}</span>
                <span>Скидка {saleNum}</span>
            </div>
        </div>
    </div>
);
}

export default BasketList;