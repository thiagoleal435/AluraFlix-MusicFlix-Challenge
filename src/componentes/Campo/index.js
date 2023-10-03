import { useState } from "react";
import { ContainerCampo, Input, Label } from "../../style";

const Campo = ({ aoAlterado, label, tipo = 'text', valor, obrigatorio, erroSpan, textoSpan, semFoco }) => {
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
        <ContainerCampo className={`campo__${tipo}`}>
            <Input
                type={tipo}
                value={valor}
                onChange={aoDigitar}
                required={obrigatorio}
                onBlur={semFoco}
                onFocus={estandoSelecionado}
                erroBorder={erroSpan}
                selecionado={selecionado}
                className={selecionado ? 'selecionado' : ''}
            />
            <Label className={selecionado ? 'selecionado' : ''}>{label}</Label>
            {erroSpan ? <span>{textoSpan}</span> : ""}
        </ContainerCampo>
    )
}

export default Campo;