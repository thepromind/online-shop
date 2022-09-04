import React from "react";



function ImageShow() {
return (
    <div className="image-show">
        <div className="image-thumb">
            <div className="arrow-up disabled">
                <svg height="24" width="24">
                    <use href='/icons/sr-arrow-up.svg#root'></use>
                </svg>
            </div>
            <div className="thumbs">
                <div className="thumb-img" style={{ backgroundImage: "url(../images/product-inner/product-inner-1.png)"}}></div>
                <div className="thumb-img" style={{ backgroundImage: "url(../images/product-inner/product-inner-1.png)"}}></div>
                <div className="thumb-img" style={{ backgroundImage: "url(../images/product-inner/product-inner-1.png)"}}></div>
                <div className="thumb-img" style={{ backgroundImage: "url(../images/product-inner/product-inner-1.png)"}}></div>
                <div className="thumb-img" style={{ backgroundImage: "url(../images/product-inner/product-inner-1.png)"}}></div>
                <div className="thumb-img" style={{ backgroundImage: "url(../images/product-inner/product-inner-1.png)"}}></div>
                <div className="thumb-img" style={{ backgroundImage: "url(../images/product-inner/product-inner-1.png)"}}></div>
            </div>
            <div className="arrow-bottom">
                <svg height="24" width="24">
                    <use href='/icons/sr-arrow-down.svg#root'></use>
                </svg>
            </div>
        </div>
        <div className="image-big">
            <div className="big-img" style={{ backgroundImage: "url(../images/product-inner/product-inner-1.png)"}}></div>
        </div>
    </div>
);
}

export default ImageShow;