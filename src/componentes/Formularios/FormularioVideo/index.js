import Campo from "../../Campo";
import CampoLista from "../../CampoLista";
import CampoTextArea from "../../CampoTextArea"
import { useState } from "react";
import { Button, Formulario } from "../../../style";
import { Link } from "react-router-dom";

const FormularioVideo = ({ aoNovoVideoCadastrado, generos }) => {

    function transformaUrlDoVideoEmThumb(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([^&]+)(?:.*)?/;
        const ehVideoDoYoutube = url.match(regex);

        if (ehVideoDoYoutube && ehVideoDoYoutube[1]) {
            const id = ehVideoDoYoutube[1];
            console.log(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
            return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        } else {
            return null;
        }
    }

    function filtrarIdDaThumb(thumb) {
        const regex = /https:\/\/img\.youtube\.com\/vi\/([^/]+)\/hqdefault\.jpg/;
        const ehThumbDoYoutube = thumb.match(regex);

        if (ehThumbDoYoutube && ehThumbDoYoutube[1]) {
            console.log(ehThumbDoYoutube[1])
            return ehThumbDoYoutube[1];
        } else {
            return null;
        }
    }

    const [formState, setFormState] = useState({
        id: '',
        titulo: '',
        thumb: '',
        url: '',
        genero: '',
        descricao: '',
    })

    const [erroState, setErroState] = useState({
        titulo: false,
        linkVideo: false,
        linkImagem: false,
        genero: false,
        descricao: false,
    })

    const aoSalvar = (evento) => {
        evento.preventDefault();
        const thumbFinal = transformaUrlDoVideoEmThumb(formState.url);
        const idFinal = filtrarIdDaThumb(thumbFinal);

        aoNovoVideoCadastrado({
            ...formState,
            id: idFinal,
            thumb: thumbFinal
        });
        setFormState({
            id: '',
            titulo: '',
            thumb: '',
            url: '',
            genero: '',
            descricao: '',
        })
    }

    const handleCampoBlur = (campo) => {
        if (formState[campo].length === 0) {
            setErroState({ ...erroState, [campo]: true });
        } else {
            setErroState({ ...erroState, [campo]: false });
        }
    };

    return (
        <Formulario>
            <h2>Novo vídeo</h2>
            <form onSubmit={aoSalvar}>
                <Campo
                    obrigatorio={true}
                    label="Título"
                    valor={formState.titulo}
                    aoAlterado={(valor) => setFormState({ ...formState, titulo: valor })}
                    semFoco={() => handleCampoBlur('titulo')}
                    erroSpan={erroState.titulo}
                    textoSpan="Titulo obrigatório"
                />
                <Campo
                    type="url"
                    obrigatorio={true}
                    label="Link do vídeo"
                    valor={formState.url}
                    aoAlterado={valor => setFormState({ ...formState, url: valor })}
                    semFoco={() => handleCampoBlur('url')}
                    erroSpan={erroState.url}
                    textoSpan="Link do vídeo obrigatório"
                />
                <CampoLista
                    obrigatorio={true}
                    valor={formState.genero}
                    itens={generos}
                    aoSelecionar={valor => setFormState({ ...formState, genero: valor })}
                />
                <CampoTextArea
                    obrigatorio={true}
                    label="Descrição"
                    valor={formState.descricao}
                    aoAlterado={valor => setFormState({ ...formState, descricao: valor })}
                    semFoco={() => handleCampoBlur('descricao')}
                    erroSpan={erroState.descricao}
                    textoSpan="Descrição obrigatória"
                />
                <div className="btn">
                    <Button>
                        Salvar
                    </Button>
                    <Button>
                        Limpar
                    </Button>
                    <Link to='/novoGenero'>
                        <Button>
                            Novo gênero
                        </Button>
                    </Link>
                </div>
            </form>
        </Formulario>
    )
}

export default FormularioVideo;