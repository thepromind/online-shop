import React from "react";



function Card({backgroundImage, percent = null, name, type, price, priceWithoutPercent = null}) {
return (
    <div className="card">
                        <div className="image-card">
                            <div className="img" style={{ backgroundImage: `${backgroundImage}` }}></div>
                            <div className="actions">
                                <div className="sale-info">

                                    {/* Если нету скидки то тогда просто целый див не показывать то что снизу */}
                                    {percent ? <div className="sale l-hot">-25%</div> : null}

                                </div>
                                <div className="favorite">
                                    <svg height="24" width="24">
                                        <use href="/icons/sr-hearth.svg#root"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="text-card">
                            <div className="info">
                                <h3>{name}</h3>
                                <p>{type}</p>
                            </div>
                            <div className="price">
                                {
                                    priceWithoutPercent
                                        ? <>
                                            <span className="primary-price">{priceWithoutPercent} ₸</span>
                                            <span className="sale-price">{price} ₸</span>
                                        </>
                                        : <span className='primary-price'>{price} ₸</span>
                                }
                            </div>
                        </div>
                    </div>
);
}

export default Card;