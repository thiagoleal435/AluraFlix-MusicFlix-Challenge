import Slider from "react-slick";

const Carousel = ({ children }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        variableWidth: true,
        variableHeight: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
    };

    // return (
    //     <div>
    //         <Slider {...settings}>
    //             {children}
    //         </Slider>
    //     </div>
    // );
}

export default Carousel;