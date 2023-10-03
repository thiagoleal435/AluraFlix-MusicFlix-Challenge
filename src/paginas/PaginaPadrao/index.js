import { Outlet, useLocation } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import DadosFormProvider from "../../contextos/dadosFormulario";
import { useEffect, useState } from "react";

const PaginaPadrao = () => {
    const location = useLocation();
    const [novoVideo, setNovoVideo] = useState("Novo vídeo");

    useEffect(() => {
        if (location.pathname.includes('novoVideo') || location.pathname.includes('editarGenero')) {
            setNovoVideo("Novo gênero");
        } else {
            setNovoVideo("Novo vídeo");
        }
    }, [location.pathname])

    return (
        <main style={{
            color: "#000",
            width: "100%",
            backgroundColor: "transparent",
            textAlign: "center",
            overflow: "hidden",
        }}>
            <Cabecalho botaoCabecalho={novoVideo} />
            <DadosFormProvider>
                <Outlet />
            </DadosFormProvider>
            <Rodape />
        </main>
    )
}

export default PaginaPadrao;