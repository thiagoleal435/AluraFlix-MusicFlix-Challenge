import FormularioGenero from "../../componentes/Formularios/FormularioGenero";
import { useDadosContexto } from "../../contextos/dadosFormulario";
import { SectionNovoEditarGenero } from "../../style";

const NovoGenero = () => {
    const { generos, adicionarGenero } = useDadosContexto();

    const aoNovoGeneroAdicionado = (novoGenero) => {
        adicionarGenero({ ...novoGenero })
        alert("Gênero adicionado com sucesso!")
    }

    return (
        <SectionNovoEditarGenero>
            <FormularioGenero
                generos={generos.map(generos => generos.nome)}
                aoNovoGeneroCadastrado={novoGenero => aoNovoGeneroAdicionado(novoGenero)}
            />
        </SectionNovoEditarGenero>
    )
}

export default NovoGenero;