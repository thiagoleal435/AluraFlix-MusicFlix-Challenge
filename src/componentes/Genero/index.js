import { SectionGenero } from "../../style";
import videos from '../../json/db.json'

export const generos = [
    "Rock",
    "MPB",
    "PopInternacional"
];

export function filtrarPorGenero(id) {
    return videos.filter(video => video.genero === generos[id])
}

const Genero = ({ genero, children }) => {
    return (
        <SectionGenero>
            <h2>{genero}</h2>
            <div>
                {children}
            </div>
        </SectionGenero>
    )
}

export default Genero;