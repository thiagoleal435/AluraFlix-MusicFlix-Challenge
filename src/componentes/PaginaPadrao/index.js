import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";

const PaginaPadrao = ({ children }) => {
    return (
        <>
            <Cabecalho />
            {children}
            <Rodape />
        </>
    )
}

export default PaginaPadrao;