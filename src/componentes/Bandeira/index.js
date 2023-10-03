import { styled } from "styled-components";
import { theme } from "../../style";

const Banner = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 115vh;
    opacity: .7;
    background-image: url('../img/banner-favorito.jpg');
    background-size: cover;
    z-index: -1;
    background-position: center;

    hr{
        margin-top: 120vh;
        border: 3px solid ${theme.cores["Rock"]};
    }

    @media (max-width:1024px) {
        height: calc(60vh - 72px); 
        hr{
            margin-top: 58vh;
        }
    }
   
    @media (max-width:768px) {
        height: calc(40vh - 51px);
        hr{
            margin-top: 38vh;
        }
    }
`;

const Bandeira = () => {

    return (
        <Banner>
            <hr></hr>
        </Banner>
    )
}

export default Bandeira;