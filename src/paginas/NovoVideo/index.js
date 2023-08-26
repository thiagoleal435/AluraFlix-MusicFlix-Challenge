import PaginaPadrao from "../../componentes/PaginaPadrao";
import Container from "../../componentes/Container";
import { styled } from "styled-components";


const NovoVideo = () => {
    const SectionNovoVideo = styled.section`
    padding-top: 5rem;
    height: 100vh;
`;

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