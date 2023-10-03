import { useParams } from "react-router-dom";
import PaginNaoEncontrada from "../PaginaNaoEncontrada";
import { styled } from "styled-components";
import { useDadosContexto } from "../../contextos/dadosFormulario";
import { theme } from "../../style";

const SectionAssistir = styled.section`
        margin-block: 7rem 3rem;
        height: auto;
        text-align: center;

        h2{
            padding: .5rem;
            color: ${theme.cores['primaria']};
            font-weight: bold;
        }

        p{
            font-size: 1.25rem;
        }

        @media (max-width: 1024px){
            margin-block: 9rem 5rem;

            iframe{
                width: 90%;
            }
        }

        @media (max-width: 768px){
            iframe{
                height: 340px;
            }
        }
    `;


const Assistir = () => {
    const { videos } = useDadosContexto();

    const parametro = useParams();
    const video = videos.find((video) => video.id === parametro.id)
    if (!video) {
        return <PaginNaoEncontrada />
    }

    return (
        <SectionAssistir>\
            <iframe
                width="760" height="420"
                src={`https://www.youtube.com/embed/${video.id}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <h2>{video.titulo}</h2>
            <p>{video.descricao}</p>
        </SectionAssistir>
    )
}

export default Assistir;