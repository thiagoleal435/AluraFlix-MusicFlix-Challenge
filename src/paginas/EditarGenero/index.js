import { useState } from "react";
import { useDadosContexto } from "../../contextos/dadosFormulario";
import { Button, Formulario, SectionNovoEditarGenero } from "../../style";
import { Link, useParams } from "react-router-dom";
import Campo from "../../componentes/Campo";

const EditarGenero = () => {
    const { generos, atualizarGenero } = useDadosContexto();

    const parametro = useParams();
    const generoParaEditar = generos.find(genero => genero.nome === parametro.nome)

    const [formState, setFormState] = useState({
        nome: generoParaEditar.nome,
        descricao: generoParaEditar.descricao,
        cor: generoParaEditar.cor,
    })

    const [erroState, setErroState] = useState({
        nome: false,
    })

    const aoEditar = (evento) => {
        evento.preventDefault();
        atualizarGenero(generoParaEditar, { ...formState })
        alert('Gênero editado com sucesso!');
        console.log(generos);
    }

    const limparFormulario = () => {
        setFormState({
            nome: '',
            descricao: '',
            cor: '#000',
        })
    }

    const erroComCampoNome = () => {
        if (formState.nome.length === 0) {
            setErroState({ ...erroState, nome: true });
        } else {
            setErroState({ ...erroState, nome: false });
        }
    };

    return (
        <SectionNovoEditarGenero>
            <Formulario>
                <h2>Editar gênero</h2>
                <form onSubmit={aoEditar}>
                    <Campo
                        obrigatorio={true}
                        label="Nome"
                        valor={formState.nome}
                        aoAlterado={(valor) => setFormState({ ...formState, nome: valor })}
                        semFoco={() => erroComCampoNome()}
                        erroSpan={erroState.nome}
                        textoSpan="Nome obrigatório"
                    />
                    <Campo
                        obrigatorio={true}
                        label="Descrição"
                        valor={formState.descricao}
                        aoAlterado={(valor) => setFormState({ ...formState, descricao: valor })}
                    />
                    <Campo
                        tipo='color'
                        label="Cor"
                        valor={formState.cor}
                        aoAlterado={valor => setFormState({ ...formState, cor: valor })}
                    />
                    <div className="btn">
                        <Button>
                            Editar
                        </Button>
                        <Button onClick={limparFormulario}>
                            Limpar
                        </Button>
                        <Link to={'/novoGenero'}>
                            <Button>
                                Voltar
                            </Button>
                        </Link>
                    </div>
                </form>
            </Formulario>
        </SectionNovoEditarGenero>
    )
}

export default EditarGenero;