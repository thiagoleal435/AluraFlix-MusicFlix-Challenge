import { styled, createGlobalStyle } from "styled-components";

export const cor = {
    corPrimaria: '#2A7AE4',
    corSecundaria: '#6BD1FF',
    corRock: '#000000',
    corMPB: '#9CD33B',
    corPopInternacional: '#6B5BE2',
    pretoForte: 'rgba(0,0,0,1)',
    pretoMedio: 'rgba(0,0,0,0.7)',
    pretoFraco: 'rgba(0,0,0,0.5)',
    cinza: '#C2C2C2',
    vermelho: '#E53935'
}

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: Roboto, sans-serif;
        background-color: rgba(0, 0, 0, 0.8);
    }
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 2.5rem;
    }
    h3{
        font-size: 2rem;
    }
    p{
        line-height: normal;
        color: #fefefe;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    padding: 0 1rem;
    border-bottom: 3px solid ${cor.corPrimaria};
    background-color: ${cor.pretoForte};
    z-index: 9999;

    img{
        height: 50px;
    }

    @media (max-width: 768px){
        img{
            height: 40px
        }
    }
`;

export const Button = styled.button`
    font-size : 1.2rem;
    text-align: center;
    border: 2px solid ${props => props.corBorda};
    background-color: ${props => props.corFundo};
    color: ${props => props.corTexto};
    padding: .5rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
`;

export const Banner = styled.div`
    position: absolute;
    top: 70px;
    width: 100vw;
    height: 100vw;
    opacity: .7;
    background-image: ${props => props.backgroundImage};
    background-size: cover;
    z-index: -1;
    background-position: center;
   
    @media (min-width:768px) {
            height: calc(90vh - 72px);
    }
    
    @media (min-width:1024px) {
            height: calc(100vh - 93px);
    }
`;

export const Section = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: #fff;
    margin-top: 70px;
    text-align: center;
    overflow: hidden;
`;

export const SectionGenero = styled.section`
    display: flex;
    flex-direction: column;

    h2{
        padding: 1rem;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
`;

export const SectionNovoVideo = styled.section`
    padding-top: 5rem;
    height: 100vh;
`

export const SectionPagina404 = styled(SectionNovoVideo)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2{
        color: ${cor.corPrimaria};
    }

    img{
        width: 50%;
    }
`


export const SectionAssistir = styled(SectionNovoVideo)`
    padding: 2rem;
`

export const Card = styled.div`  
    width: 400px;
    height: 250px;
    position: relative;
    border: 3px solid ${props => cor[`cor${props.corBorda}`]};
    border-radius: 5px;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 250px;
    }
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 3px solid ${cor.corPrimaria};

    img{
        height: 50px;
    }

    p{
        margin: .5rem;
    }

@media(max-width: 768px) {
        img{
        height: 40px;
    }
}
`;