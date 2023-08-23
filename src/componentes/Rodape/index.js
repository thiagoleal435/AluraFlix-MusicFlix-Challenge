import { Footer } from "../../style";
import { Link } from "react-router-dom";

const Rodape = () => {
    return (
        <Footer>
            <Link to="/">
                <img src="../../img/logo.png" alt="Logo MusicFlix" />
            </Link>
            <p>
                Desenvolvido por Thiago Leal 2023
            </p>
        </Footer>
    )
}

export default Rodape;