import Campo from "../../Campo";
import { useState } from "react";
import { Button, Formulario } from "../../../style";
import TabelaGeneros from "../FormularioTabela"
import { useDadosContexto } from "../../../contextos/dadosFormulario";

const FormularioGenero = ({ aoNovoGeneroCadastrado }) => {

    const { generos } = useDadosContexto();

    const [formState, setFormState] = useState({
        nome: '',
        descricao: '',
        cor: '#000',
    })

    const [erroState, setErroState] = useState({
        nome: false,
    })

    const aoSalvar = (evento) => {
        evento.preventDefault();
        let nomeIgual = false;
        generos.forEach(genero => {
            if (formState.nome.toUpperCase() === genero.nome.toUpperCase()) {
                nomeIgual = true;
            }
        });
        if (nomeIgual) {
            alert('Já existe um gênero com este nome! Escolha outro nome para o gênero.');
        } else {
            aoNovoGeneroCadastrado({ ...formState });
            setFormState({
                nome: '',
                descricao: '',
                cor: '#000',
            })
        }
    }

    const erroComCampoNome = () => {
        if (formState.nome.length === 0) {
            setErroState({ ...erroState, nome: true });
        } else {
            setErroState({ ...erroState, nome: false });
        }
    };

    const limparFormulario = () => {
        setFormState({
            nome: '',
            descricao: '',
            cor: '#000',
        })
    }

    return (
        <>
            <Formulario>
                <h2>Novo gênero</h2>
                <form onSubmit={aoSalvar}>
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
                        <Button type="submit">
                            Salvar
                        </Button>
                        <Button onClick={limparFormulario}>
                            Limpar
                        </Button>
                    </div>
                </form>
            </Formulario>
            <TabelaGeneros />
        </>
    )
}

export default FormularioGenero;