import { styled } from "styled-components";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import erro404 from './erro-404.png'

const PaginNaoEncontrada = () => {
    const SectionPagina404 = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
    height: 100vh;

    h2{
        color: ${props => props.theme.cores.primaria};
    }

    img{
        width: 50%;
    }
`;

    return (
        <>
            <Cabecalho />
            <SectionPagina404>
                <h2>Ops! Página não encontrada!</h2>
                <img src={erro404} alt="Logo de página não encontrada" />
            </SectionPagina404>
            <Rodape />
        </>
    )
}

export default PaginNaoEncontrada;