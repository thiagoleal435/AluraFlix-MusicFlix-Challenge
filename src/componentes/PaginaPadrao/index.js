import { GlobalStyles } from "../../style";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";

const PaginaPadrao = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Cabecalho />
            {children}
            <Rodape />
        </>
    )
}

export default PaginaPadrao;