import React from "react";
import Breadcrumbs from '../components/Breadcrumbs';


function ProductInner() {
return (
    <div className="wrapper">
        <div className="container-fluid">
            <div className="row">

                <div className="com-md-12">
                    <div className="navigate-breadcrumbs">
                        <div className="navigate-left d-flex-align-center gg-16">
                            <span className="link-back">

                                <svg height="24" width="24">
                                    <use href='/icons/sr-arrow-left.svg#root'></use>
                                </svg>

                            </span>
                            <Breadcrumbs/>
                        </div>
                        <div className="navigate-left">
                            <span className="link-share">
                                
                                <svg height="24" width="24">
                                    <use href='/icons/sr-shareoption.svg#root'></use>
                                </svg>
                                
                            </span>
                        </div>
                    </div>
                </div>

                <div className="com-md-12">
                    
                </div>

            </div>


        </div>
    </div>
);
}

export default ProductInner;