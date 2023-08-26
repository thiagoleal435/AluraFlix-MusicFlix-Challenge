import { useParams } from "react-router-dom";
import videos from '../../json/db.json';
import PaginNaoEncontrada from "../PaginaNaoEncontrada";
import PaginaPadrao from "../../componentes/PaginaPadrao";
import { styled } from "styled-components";

const Assistir = () => {
    const parametro = useParams();
    const video = videos.find((video) => video.id === parametro.id)
    if (!video) {
        return <PaginNaoEncontrada />
    }

    const SectionAssistir = styled.section`
        padding-top: 5rem;
        height: 100vh;
        text-align: center;
        margin-top: 70px;
    `;

    return (
        <>
            <PaginaPadrao>
                <SectionAssistir>
                    <iframe
                        width="945" height="480"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </SectionAssistir>
            </PaginaPadrao>
        </>
    )
}

export default Assistir;