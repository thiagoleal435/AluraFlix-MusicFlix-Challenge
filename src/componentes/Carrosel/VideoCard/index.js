import { Link } from "react-router-dom";
import { styled } from "styled-components";

const CaixaCard = styled.div`
    position: relative;
    width: 372px;
    height: 212px;
    border: 3px solid ${props => props.corBorda};
    border-radius: 5px;

    @media (max-width: 1024px){
        width: 382px;
        height: 216px;
    }

    @media (max-width: 768px){
        width: 328px;
        height: 180px;
    }
`;

const Card = styled.img`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const VideoCard = ({ id, corGenero }) => {

    return (
        <Link to={`/assistir/${id}`}>
            <CaixaCard corBorda={corGenero}>
                <Card
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt="Capa do vídeo"
                >
                </Card>
            </CaixaCard>
        </Link>
    )
}

export default VideoCard;