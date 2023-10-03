import { styled } from "styled-components";
import FormularioVideo from "../../componentes/Formularios/FormularioVideo";
import { useDadosContexto } from "../../contextos/dadosFormulario";

const SectionNovoVideo = styled.section`
        color: white;
        height: auto;
        width: 95%;
        margin: 0 auto;
        margin-block: 6rem;
`;

const NovoVideo = () => {

    const { generos, adicionarVideo } = useDadosContexto();

    const aoNovoVideoAdicionado = (novoVideo) => {
        adicionarVideo({ ...novoVideo });
        alert("Vídeo adicionado com sucesso!");
    }

    return (
        <SectionNovoVideo>
            <FormularioVideo
                generos={generos.map(generos => generos.nome)}
                aoNovoVideoCadastrado={novoVideo => aoNovoVideoAdicionado(novoVideo)}
            />
        </SectionNovoVideo>
    )
}

export default NovoVideo;