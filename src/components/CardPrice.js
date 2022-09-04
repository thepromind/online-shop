import React from "react";
import Button from '../components/Button';



function CardPrice() {
return (
    <div className="card-price">
        <div className="card-price-top">
            <h3 className="price">31 950 〒</h3>
            <span className="sale-price">41 950 〒</span>
        </div>
        <div className="card-price-bottom">
            <Button 
                text={'Добавить в корзину'}
                className={'btn btn-primary w-100'}
            />
            <p>Доставка <b>15 сентября</b></p>
        </div>
    </div>
);
}

export default CardPrice;