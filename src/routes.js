import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import NovoVideo from "./paginas/NovoVideo";
import PaginNaoEncontrada from "./paginas/PaginaNaoEncontrada";
import Assistir from "./paginas/Assistir";
import NovoGenero from "./paginas/NovoGenero";
import PaginaPadrao from "./paginas/PaginaPadrao";
import EditarGenero from "./paginas/EditarGenero";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path="assistir/:id" element={<Assistir />} />
                    <Route path="novoVideo" element={<NovoVideo />} />
                    <Route path="novoGenero" element={<NovoGenero />} />
                    <Route path="editarGenero/:nome" element={<EditarGenero />} />
                    <Route path="*" element={<PaginNaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;