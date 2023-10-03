import { styled } from "styled-components";
import { theme } from "../../style";
import { useState } from "react";

const CaixaArea = styled.div`
        position: relative;
        display: flex;
        flex-wrap: wrap;
        margin: 2rem 0;

        span{
            position: absolute;
            bottom: -1.5rem;
            color: ${theme.cores['corErro']};
            font-weight: bold;
        }
    `;

const TextArea = styled.textarea`
        background-color: ${theme.cores['fundoInput']};
        width: 100%;
        font-size: 1.25rem;
        padding-block: 1.5rem 4.5rem;
        padding-inline: .75rem 1rem;
        border: none;
        border-bottom: 3px solid transparent;
        resize: none;
        box-sizing: border-box;
        box-shadow: ${theme.styles['sombraCampo']}
        border-radius: 5px;
        transition: 0.3s;
        color: white;

        &:hover, &:valid, &:focus {
            outline: none;
            border-bottom: 3px solid ${theme.cores['primaria']};
        }

        &.selecionado{
            border-bottom: ${props => props.erroBorder ?
        `3px solid ${theme.cores['corErro']}` :
        `3px solid ${theme.cores['primaria']}`};
        }
    `;

const LabelArea = styled.label`
        position: absolute;
        top: 10%;
        left: 1rem;
        pointer-events: none;
        transition: 0.2s ease all;

        ${TextArea}:hover+&,
        ${TextArea}:valid+&,
        ${TextArea}:focus-within+& {
            top: .5rem;
            left: .5rem;
            font-size: 0.8rem;
        }

        &.selecionado{
            top: .5rem;
            left: .5rem;
            font-size: 0.8rem;
        }
    }
`;

const CampoTextArea = ({ aoAlterado, label, valor, obrigatorio, erroSpan, textoSpan, semFoco }) => {
    const [selecionado, setSelecionado] = useState(false);

    const aoDigitar = (evento) => {
        aoAlterado(evento.target.value);
    }

    const estandoSelecionado = () => {
        if (!selecionado) {
            setSelecionado(true);
        }
    }
    return (
        <CaixaArea>
            <TextArea
                value={valor}
                onChange={aoDigitar}
                required={obrigatorio}
                maxLength={300}
                onBlur={semFoco}
                onFocus={estandoSelecionado}
                erroBorder={erroSpan}
                selecionado={selecionado}
                className={selecionado ? 'selecionado' : ''}
            ></TextArea>
            <LabelArea className={selecionado ? 'selecionado' : ''}>{label}</LabelArea>
            {erroSpan ? <span>{textoSpan}</span> : ""}
        </CaixaArea>
    )
}

export default CampoTextArea;