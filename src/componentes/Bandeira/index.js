import { styled } from "styled-components";

const Bandeira = () => {
    const Banner = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 115vh;
    opacity: .7;
    background-image: ${props => props.backgroundImage};
    background-size: cover;
    z-index: -1;
    background-position: center;

    hr{
        margin-top: 120vh;
        border: 3px solid ${props => props.theme.cores.Rock};
    }

    @media (max-width:1024px) {
        height: calc(90vh - 72px); 
        hr{
            margin-top: 85vh;
        }
    }
   
    @media (max-width:768px) {
        height: calc(60vh - 51px);
        hr{
            margin-top: 60vh;
        }
    }
    
    
`;

    return (
        <Banner
            backgroundImage={`url('../img/banner-favorito.jpg')`}
        >
            <hr></hr>
        </Banner>
    )
}

export default Bandeira;