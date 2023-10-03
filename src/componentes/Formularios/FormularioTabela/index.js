import { useDadosContexto } from "../../../contextos/dadosFormulario";
import { theme } from "../../../style";
import styled from "styled-components";
import { BsTrash3 } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import { Link } from "react-router-dom";

const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 3px solid ${theme.cores['primaria']};
    margin: 2rem 0;

    th{
        font-size: 1.5rem;
        border: 3px solid ${theme.cores['primaria']};
        padding: .5rem;
        text-align: left;
    }

    td{
        font-weight: bold;
        border: 2px solid ${theme.cores['pretoForte']};
        padding: 0.5rem;
        text-align: left;
    }

    @media (max-width: 1024px){
        .th__sec{
            display: none;
        }

        .tr__sec{
            :nth-child(2){
                display: none;
            }
        }

        .td__sec{
            display: none;
        }
    }
`
const TabelaGeneros = () => {
    const { videos, generos, removerGenero } = useDadosContexto();

    return (
        <Tabela>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th className="th__sec">Descrição</th>
                    <th className="th__sec">Videos</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                {generos.map(genero => {
                    const videosDoGenero = videos.filter(video => video.genero === genero.nome)

                    return <tr className="tr__sec" key={genero.nome}>
                        {Object.entries(genero).slice(0, -1).map(([chave, valor]) => {
                            return <td key={chave}>{valor}</td>
                        })}
                        <td className="td__sec">{videosDoGenero.length}</td>
                        <td style={{ textAlign: "center", cursor: "pointer" }}>
                            <Link to={`/editarGenero/${genero.nome}`}><BiEditAlt size={20} /></Link>
                        </td>
                        <td style={{ textAlign: "center", cursor: "pointer" }}>
                            <BsTrash3 size={20} onClick={() => {
                                if ([...generos].length === 1) {
                                    alert('Não é possovel zerar o números de gêneros! Crie um outro para que possa remover este.');
                                } else {
                                    removerGenero(genero.nome)
                                }
                            }} />
                        </td>
                    </tr>
                })}
            </tbody>
        </Tabela>
    )
}

export default TabelaGeneros;