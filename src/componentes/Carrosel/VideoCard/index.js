import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../style";

const VideoCard = ({ id, genero }) => {
    const Card = styled.img`
    width: 430px;
    height: 260px;
    border: 3px solid ${props => theme.cores[props.corBorda]};
    border-radius: 5px;
`;

    return (
        <Link to={`/assistir/${id}`}>
            <Card
                src={`https://img.youtube.com/vi/${id}/0.jpg`}
                alt="Capa do vídeo"
                corBorda={genero}>
            </Card>
        </Link>
    )
}

export default VideoCard;