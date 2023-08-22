import { Link } from "react-router-dom";
import { Card } from "../../../style";

const VideoCard = ({ id, genero }) => {
    return (
        <Card corBorda={genero}>
            <Link to={`/assistir/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/0.jpg`} alt="Capa do vídeo" />
            </Link>
        </Card>
    )
}

export default VideoCard;