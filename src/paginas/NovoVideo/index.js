import PaginaPadrao from "../../componentes/PaginaPadrao";
import Container from "../../componentes/Container";
import { SectionNovoVideo } from "../../style";


const NovoVideo = () => {
    return (
        <>
            <PaginaPadrao>
                <Container>
                    <SectionNovoVideo>
                        <h1>Novo Video</h1>
                    </SectionNovoVideo>
                </Container>
            </PaginaPadrao>
        </>
    )
}

export default NovoVideo;