import Cabecalho from "../../componentes/Cabecalho";
import Container from "../../componentes/Container";
import Rodape from "../../componentes/Rodape";
import { GlobalStyles, SectionNovoVideo } from "../../style";


const NovoVideo = () => {
    return (
        <>
            <GlobalStyles />
            <Cabecalho />
            <Container>
                <SectionNovoVideo>
                    <h1>Novo Video</h1>
                </SectionNovoVideo>
            </Container>
            <Rodape />
        </>
    )
}

export default NovoVideo;