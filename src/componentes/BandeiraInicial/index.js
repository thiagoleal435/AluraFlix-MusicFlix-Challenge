import { Link } from 'react-router-dom';
import { SectionGenero, TituloGenero } from '../../style';
import Carousel from '../Carrosel/Carousel';
import videos from '../../json/db.json';
import VideoCard from '../Carrosel/VideoCard';
import { styled } from 'styled-components';

const BannerMain = ({ genero, id }) => {
    const SectionBanner = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 140px;
    padding: 2rem;
    margin-bottom: 5rem;
    gap: 5%;

    .div__info{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        width: 40%;
        margin-top: 2rem;
    }

    h3{
        padding-top: 1rem;
        color: white;
        font-weight: 300;
    }
`;

    const Iframe = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 32.5%;
    flex: 1;

        iframe{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

    @media (max-width: 1024px){
        padding-bottom: 40%;
    }
    `;

    return (
        <>
            <SectionBanner>
                <div className='div__info'>
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
                <Iframe>
                    <iframe
                        src="https://www.youtube.com/embed/fJ9rUzIMcZQ?si=vkTNt7LG66oBI5Be"
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </Iframe>
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