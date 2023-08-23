import { Link } from "react-router-dom";
import { Header, Button } from "../../style";

const Cabecalho = () => {
    return (
        <Header>
            <Link to="/">
                <img src='./img/logo.png' alt='Logo MusicFlix' />
            </Link>
            <Link to="/novoVideo">
                <Button
                    corBorda={'#ffffff'}
                    corFundo={"transparent"}
                    corTexto={'#ffffff'}
                >
                    Novo vídeo
                </Button>
            </Link>
        </Header >
    )
}

export default Cabecalho;