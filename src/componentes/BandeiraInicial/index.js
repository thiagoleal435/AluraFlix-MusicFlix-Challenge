import { useDadosContexto } from '../../contextos/dadosFormulario';
import { TituloGenero } from '../../style';
import Carousel from '../Carrosel/Carousel';
import VideoCard from '../Carrosel/VideoCard';
import { styled } from 'styled-components';

const SectionBanner = styled.section`
    display: flex;
    margin-top: 100px;
    padding: 0 2rem;
    margin-bottom: 3rem;
    gap: 10%;

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

    p{
        text-align: start;
    }

    @media (max-width: 1024px){
        flex-direction: column-reverse;
        margin-top: 120px;
        margin-bottom: 2rem;
        padding: 0 1rem;

        h3, p{
            display: none;
        }
    }
`;

const Iframe = styled.div`
    position: relative;
    width: 70%;
    height: 440px;

        iframe{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        
    @media (max-width: 1024px){
        width: 100%;
        height: 440px;
        margin-block: 3rem;
    }

    @media (max-width: 768px){
        width: 100%;
        height: 240px;
        margin: 1rem 0;
    }
    `;

const BannerMain = ({ corGenero, nomeGenero }) => {

    const { videos } = useDadosContexto();

    return (
        <section>
            <SectionBanner>
                <div className='div__info'>
                    <TituloGenero fontSize='2.5rem' corFundo={corGenero}>
                        {nomeGenero}
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
            <Carousel>
                {videos.filter((video) => video.genero === nomeGenero).map((video) =>
                    <VideoCard genero={nomeGenero} id={video.id} key={video.id} />
                )}
            </Carousel>
        </section>
    )
}

export default BannerMain;