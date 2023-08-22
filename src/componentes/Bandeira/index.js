import { Banner } from "../../style";

const Bandeira = ({ img }) => {
    return (
        <Banner
            backgroundImage={`url('./img/banner-${img}.jpg')`}
        >
        </Banner>
    )
}

export default Bandeira;