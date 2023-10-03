import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import { useEffect, useState } from "react";

const CarroselContainer = styled.div`
        width: 100%;
        overflow: hidden;
        margin-left: 1.5rem;

        .slick-slide{
            margin: 0 10px;
        }
            
    @media screen and (max-width: 1024px) {
        .slick-prev::before,
        .slick-next::before {
            display: none;
        }
    }
`;

const Carousel = ({ children }) => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [slidesToScroll, setSlidesToScroll] = useState(3);

    useEffect(() => {
        const atualizarSlides = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(3);
                setSlidesToScroll(3);
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(2);
                setSlidesToScroll(2);
            } else {
                setSlidesToShow(1);
                setSlidesToScroll(1);
            }
        };

        window.addEventListener('resize', atualizarSlides);

        atualizarSlides();

        return () => {
            window.removeEventListener('resize', atualizarSlides);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        focusOnSelect: true,
        variableWidth: true,
        adaptiveHeight: true
    };

    return (
        <CarroselContainer>
            <Slider {...settings}>
                {children}
            </Slider>
        </CarroselContainer>
    );
}

export default Carousel;