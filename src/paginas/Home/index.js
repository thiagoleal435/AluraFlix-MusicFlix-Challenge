import { useState } from "react";
import Bandeira from "../../componentes/Bandeira";
import Carousel from "../../componentes/Carrosel/Carousel";
import Genero, { generos, filtrarPorGenero } from "../../componentes/Genero";
import VideoCard from "../../componentes/Carrosel/VideoCard";
import Container from "../../componentes/Container";
import PaginaPadrao from "../../componentes/PaginaPadrao";

const Home = () => {

    return (
        <>
            <PaginaPadrao>
                <Bandeira />
                <Container>
                    {
                        generos.map((genero, indice) =>
                            <Genero genero={genero}>
                                <Carousel>
                                    {filtrarPorGenero(indice).map((video) =>
                                        <VideoCard genero={video.genero} id={video.id} key={video.id} />
                                    )}
                                </Carousel>
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
            </PaginaPadrao>
        </>
    );
}

export default Home;
