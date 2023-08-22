import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import NovoVideo from "./paginas/NovoVideo";
import PaginNaoEncontrada from "./paginas/PaginaNaoEncontrada";
import Assistir from "./paginas/Assistir";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/assistir/:id" element={<Assistir />}></Route>
                <Route path="/novoVideo" element={<NovoVideo />}></Route>
                <Route path="*" element={<PaginNaoEncontrada />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;