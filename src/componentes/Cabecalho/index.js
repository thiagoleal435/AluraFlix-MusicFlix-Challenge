import { Link } from "react-router-dom";
import { Button } from "../../style";
import { styled } from "styled-components";
import { theme } from "../../style";

const Header = styled.header`
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100%;
      height: 70px;
      padding: 0 2.5%;
      border-bottom: 3px solid ${theme.cores['primaria']}; 
      background-color: ${theme.cores['pretoForte']};
      z-index: 9999;
  
      img {
          height: 50px;
      }

      button{
        background-color: transparent;
        border-color: white;
      }
  
      @media (max-width: 1024px) {
          img {
              height: 40px;
          }
      }
`;


const Cabecalho = ({ botaoCabecalho }) => {
    return (
        <Header>
            <Link to="/">
                <img src='../img/logo.png' alt='Logo MusicFlix' />
            </Link>
            <Link to={botaoCabecalho === "Novo vídeo" ? "/novoVideo" : "/novoGenero"}>
                <Button>
                    {botaoCabecalho}
                </Button>
            </Link>
        </Header>
    );
}

export default Cabecalho;