import React from "react";



function Card() {
return (
    <div className="card">
                        <div className="image-card">
                            <div className="img" style={{ backgroundImage: "url(../images/products/product-1.png" }}></div>
                            <div className="actions">
                                <div className="sale-info">

                                    {/* Если нету скидки то тогда просто целый див не показывать то что снизу */}
                                    <div className="sale l-hot">-25%</div>

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
                                <h3>Dates Box</h3>
                                <p>Футболки</p>
                            </div>
                            <div className="price">
                                <span className="primary-price">6 790 ₸</span>
                                <span className="sale-price">4 490 ₸</span>
                            </div>
                        </div>
                    </div>
);
}

export default Card;