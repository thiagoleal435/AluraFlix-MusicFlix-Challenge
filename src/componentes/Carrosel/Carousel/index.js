import './Carousel.css'
import Slider from "react-slick";

const Carousel = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;