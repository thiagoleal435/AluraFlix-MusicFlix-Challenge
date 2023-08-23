import './Carousel.css'
import Slider from "react-slick";

const Carousel = ({ children }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0
    };

    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;