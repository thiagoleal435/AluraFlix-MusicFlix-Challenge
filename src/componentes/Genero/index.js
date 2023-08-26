import videos from '../../json/db.json'
import { SectionGenero, TituloGenero } from '../../style';
import { styled } from 'styled-components';

export const generos = [
    "MPB",
    "Pop Internacional"
];

export function filtrarPorGenero(id) {
    return videos.filter(video => video.genero === generos[id])
}

const Genero = ({ genero, children }) => {
    const ContainerGenero = styled.section`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;

        .genero__div{
            display: flex;
            margin-left: 1.75rem;
            gap: 1rem;
            align-items: center;
        }
    `;

    return (
        <ContainerGenero>
            <div className='genero__div'>
                <TituloGenero fontSize='1.5rem' corFundo={genero}>
                    {genero}
                </TituloGenero>
                <p>Videos de musicas do gênero {genero}</p>
            </div>
            <SectionGenero>
                <div>
                    {children}
                </div>
            </SectionGenero>
        </ContainerGenero>
    )
}

export default Genero;