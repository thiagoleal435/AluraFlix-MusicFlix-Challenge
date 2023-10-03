import Bandeira from "../../componentes/Bandeira";
import Carousel from "../../componentes/Carrosel/Carousel";
import Genero from "../../componentes/Genero";
import VideoCard from "../../componentes/Carrosel/VideoCard";
import BannerMain from "../../componentes/BandeiraInicial";
import { useDadosContexto } from "../../contextos/dadosFormulario";

const Home = () => {
    const { videos, generos } = useDadosContexto();
    console.log(videos)
    const generoRock = generos.find(genero => genero.nome === "Rock")

    return (
        <>
            <Bandeira />
            <BannerMain
                nomeGenero={generoRock.nome}
                corGenero={generoRock.cor}
            />
            {
                generos.filter(genero => genero.nome !== "Rock").map((genero, indice) => {
                    return <Genero corGenero={genero.cor} nomeGenero={genero.nome} key={indice}>
                        <Carousel>
                            {videos.filter(video => video.genero === genero.nome).map((video) => {
                                return <VideoCard corGenero={genero.cor} id={video.id} key={video.id} />
                            }
                            )}
                        </Carousel>
                    </Genero>
                })
            }
        </>
    );
}

export default Home;
