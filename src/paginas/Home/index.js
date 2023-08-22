import { useState } from "react";
import { GlobalStyles } from "../../style";
import Cabecalho from "../../componentes/Cabecalho";
import Bandeira from "../../componentes/Bandeira";
import Rodape from "../../componentes/Rodape";
import Carousel from "../../componentes/Carrosel/Carousel";
import Genero, { generos, filtrarPorGenero } from "../../componentes/Genero";
import VideoCard from "../../componentes/Carrosel/VideoCard";
import Container from "../../componentes/Container";
import PaginaPadrao from "../../componentes/PaginaPadrao";

function Home() {

    return (
        <>
            <PaginaPadrao />
            <Bandeira img={'favorito'} />
            <Container>
                {
                    generos.map((genero, indice) =>
                        <Genero genero={genero}>
                            {filtrarPorGenero(indice).map((video) =>
                                <VideoCard genero={video.genero} id={video.id} key={video.id} />
                            )}
                        </Genero>
                    )
                }
                {/* {generos.map((genero, index) => {
          <Genero genero={genero}>
            <Carousel>
              {filtrarPorGenero(index).map((video) =>
                <VideoCard url={video.url} key={video.url} />
              )}
            </Carousel>
          </Genero>
        })} */}

            </Container>
        </>
    );
}

export default Home;
