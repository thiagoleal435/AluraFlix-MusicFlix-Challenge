import { TituloGenero } from '../../style';
import { styled } from 'styled-components';

const ContainerGenero = styled.section`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin: 3rem 0;
        gap: 1rem;
    `;

const ContainerTitulo = styled.div`
        display: flex;
        margin-left: 1.75rem;
        gap: 1rem;
        align-items: center;

        @media (max-width: 1024px){
            p{
                font-size: .8rem;
            }
        }
    `;

const Genero = ({ corGenero, nomeGenero, children }) => {
    return (
        <ContainerGenero>
            <ContainerTitulo>
                <TituloGenero fontSize='1.5rem' corFundo={corGenero}>
                    {nomeGenero}
                </TituloGenero>
                <p>Videos de músicas do gênero {nomeGenero}</p>
            </ContainerTitulo>
            {children}
        </ContainerGenero>
    )
}

export default Genero;