import React from "react";
import Slider from "react-slick";
import './index.scss'
const SliderComponent = ({ children, settings, className }) => {
    return (
        <div className={className}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default SliderComponent;