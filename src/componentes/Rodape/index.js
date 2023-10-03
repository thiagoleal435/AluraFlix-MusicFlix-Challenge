import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../style";

const Footer = styled.footer`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
    border-top: 3px solid ${theme.cores['primaria']};

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

const Rodape = () => {

    return (
        <Footer>
            <Link to="/">
                <img src="../../img/logo.png" alt="Logo MusicFlix" />
            </Link>
            <p>
                Desenvolvido por Thiago Leal 2023
            </p>
        </Footer>
    )
}

export default Rodape;