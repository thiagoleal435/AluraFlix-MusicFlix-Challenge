import { Link } from 'react-router-dom';
import { SectionBanner, SectionGenero, TituloGenero } from '../../style';
import Carousel from '../Carrosel/Carousel';
import videos from '../../json/db.json';
import VideoCard from '../Carrosel/VideoCard';

const BannerMain = ({ genero, id }) => {
    return (
        <>
            <SectionBanner>
                <div>
                    <TituloGenero fontSize='2.5rem' corFundo={genero}>
                        {genero}
                    </TituloGenero>
                    <h3>"Um Poema Épico"</h3>
                    <p>
                        Uma grande obra de Freddie Mercury e do Queen como um todo, que na época estava produzindo o clássico "A nigth at the opera".
                        Em meio a muitas experimentações e novos caminhos que a banda estava tomando,
                        essa obra torna a banda ainda mais relevante e mostra ao mundo a genialidade que existia no Queen.
                    </p>
                </div>
                <Link to={`/assitir/${id}`}>
                    <iframe width="720" height="420"
                        src="https://www.youtube.com/embed/fJ9rUzIMcZQ?si=vkTNt7LG66oBI5Be"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </Link>
            </SectionBanner>
            <SectionGenero>
                <Carousel>
                    {videos.filter((video) => video.genero === genero).map((video) =>
                        <VideoCard genero={genero} id={video.id} key={video.id} />
                    )}
                </Carousel>
            </SectionGenero>
        </>
    )
}

export default BannerMain;