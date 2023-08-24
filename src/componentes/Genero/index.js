import { SectionGenero, TituloGenero } from "../../style";
import './Genero.css'
import videos from '../../json/db.json'

export const generos = [
    "MPB",
    "PopInternacional"
];

export function filtrarPorGenero(id) {
    return videos.filter(video => video.genero === generos[id])
}

const Genero = ({ genero, children }) => {
    return (
        <div className='genero'>
            <div className='genero__titulo'>
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
        </div>
    )
}

export default Genero;