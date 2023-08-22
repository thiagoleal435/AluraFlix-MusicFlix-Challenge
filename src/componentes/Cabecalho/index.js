import { Link } from "react-router-dom";
import { Header, Button } from "../../style";

const Cabecalho = () => {
    return (
        <Header>
            <Link to="/">
                <img src='./img/logo.png' alt='Logo MusicFlix' />
            </Link>
            <Button
                corBorda={'#ffffff'}
                corFundo={"transparent"}
                corTexto={'#ffffff'}
            >
                <Link to="/novoVideo">
                    Novo vídeo
                </Link>
            </Button>
        </Header >
    )
}

export default Cabecalho;