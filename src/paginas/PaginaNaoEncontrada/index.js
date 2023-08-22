import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { GlobalStyles, SectionPagina404 } from "../../style";
import erro404 from './erro-404.png'

const PaginNaoEncontrada = () => {
    return (
        <>
            <GlobalStyles />
            <Cabecalho />
            <SectionPagina404>
                <h2>Ops! Página não encontrada!</h2>
                <img src={erro404} alt="Logo de página não encontrada" />
            </SectionPagina404>
            <Rodape />
        </>
    )
}

export default PaginNaoEncontrada;