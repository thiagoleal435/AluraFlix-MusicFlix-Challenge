import { styled } from "styled-components";
import { theme } from "../../style";

const CaixaLista = styled.div`
    label{
        display: flex;
        margin-bottom: .5rem;
        font-size: 1.2rem;
        font-weight: bold;
    }

    select{
        background-color: ${theme.cores['fundoInput']};
        box-shadow: ${theme.styles['sombraCampo']};
        width: 100%;
        border: none;
        padding: 1rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
    }
`;

const CampoLista = ({ aoSelecionar, obrigatorio, valor, itens, placeholder }) => {

    const aoSelecionado = (evento) => {
        aoSelecionar(evento.target.value);
    }

    return (
        <CaixaLista>
            <label>Escolha um gênero</label>
            <select onChange={aoSelecionado} required={obrigatorio} value={valor} placeholder={placeholder}>
                <option value=""></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </CaixaLista>
    )
}

export default CampoLista;