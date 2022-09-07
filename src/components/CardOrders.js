import React from "react";



function CardOrders({backgroundImage, name, type, price, priceWithoutPercent = null, percent = null, statusBadge = null}) {
return (
    <div className="card">
        <div className="image-card">
            <div className="img" style={{ backgroundImage: `${backgroundImage}` }}></div>
            <div className="actions">
                <div className="sale-info">

                    {/* Если нету скидки то тогда просто целый див не показывать то что снизу */}
                    {percent ? <div  className={`sale ${statusBadge}`}>{percent}</div> : null}

                </div>
            </div>
        </div>
        <div className="text-card">
            <div className="info">
                <h3>{name}</h3>
                <p>{type}</p>
            </div>
            <div className="price mb-16">
                {
                    priceWithoutPercent
                        ? <>
                            <span className="primary-price">{priceWithoutPercent} ₸</span>
                            <span className="sale-price">{price} ₸</span>
                        </>
                        : <span className='primary-price'>{price} ₸</span>
                }
            </div>
            <div className="about-delivery">
                <div className="about-delivery-left">
                    <span className="title">Заказан</span>
                    <span className="info">10 января</span>
                </div>
                <div className="about-delivery-right">
                    <span className="title">Получен</span>
                    <span className="info">24 января</span>
                </div>
            </div>
        </div>
    </div>
);
}

export default CardOrders;