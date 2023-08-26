import { Link } from "react-router-dom";
import { Button } from "../../style";
import { styled } from "styled-components";

const Cabecalho = () => {
    const Header = styled.header`
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100%;
      height: 70px;
      padding: 0 1rem;
      border-bottom: 3px solid ${props => props.theme.cores.primaria}; 
      background-color: ${props => props.theme.cores.pretoForte};
      z-index: 9999;
  
      img {
          height: 50px;
      }
  
      @media (max-width: 1024px) {
          img {
              height: 40px;
          }
      }
`;

    return (
        <Header>
            <Link to="/">
                <img src='../img/logo.png' alt='Logo MusicFlix' />
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
        </Header>
    );
}

export default Cabecalho;