import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const Carousel = ({ children }) => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: false,
        speed: 500,
        variableWidth: true,
    });

    useEffect(() => {
        const atualizaSettingsDoSlider = () => {
            if (window.innerWidth < 1024) {
                setSettings({ ...settings, slidesToScroll: 1, })
            }
            else {
                setSettings({ ...settings, slidesToScroll: 3, slidesToShow: 3, })
            }
        };

        window.addEventListener('resize', atualizaSettingsDoSlider);
        atualizaSettingsDoSlider();

        return () => {
            window.removeEventListener('resize', atualizaSettingsDoSlider);
        };
    }, [])

    return (
        <div className='carousel__container'>
            <Slider {...settings}>
                {React.Children.map(children, child => (
                    <div className='carousel__item'>{child}</div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;