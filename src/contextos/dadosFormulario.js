import { createContext, useContext, useState } from "react";
import dados from "../json/db.json";

export const DadosContexto = createContext();

export default function DadosFormProvider({ children }) {
    const [videos, setVideos] = useState([...dados.videos])
    const [generos, setGeneros] = useState([...dados.generos])

    const adicionarVideo = (novoVideo) => {
        setVideos([...videos, novoVideo]);
    }

    const adicionarGenero = (novoGenero) => {
        setGeneros([...generos, novoGenero]);
    }

    const atualizarGenero = (antigoGenero, novoGenero) => {
        const novoArray = generos.map(genero => genero === antigoGenero ? { ...genero, ...novoGenero } : genero);
        setGeneros(novoArray);
    }

    const removerGenero = (nome) => {
        const novoArray = generos.filter(genero => genero.nome !== nome)
        setGeneros(novoArray);
    }

    return (
        <DadosContexto.Provider value={{ videos, generos, adicionarVideo, adicionarGenero, atualizarGenero, removerGenero }}>
            {children}
        </DadosContexto.Provider>
    );
}

export function useDadosContexto() {
    return useContext(DadosContexto);
}
