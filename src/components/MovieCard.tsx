import { useNavigate } from 'react-router';
import { Card, Image, Medal } from './MovieCard.style';

interface Props {
    movie : any,
    type : "tv" | "movie",
    index: number
}

const MovieCard = ({movie, type, index}: Props) => {
    const navigate = useNavigate()
    const baseImgUrl = "https://image.tmdb.org/t/p/w500/"

    return (
        <Card
            onClick={() => navigate(`?id=${movie.id}`)}
        >
            {/* <i className='fa-solid fa-heart'></i> */}
            <i className="fa-regular fa-heart"></i>
            <h3>
                {
                   type == "movie" ? movie.title : movie.name
                }
            </h3>
            <Image>
                <img src={baseImgUrl + movie.poster_path} alt={movie.title} />
            </Image>
            { 
                index == 0 && 
                <Medal><img src="assets/img/or.png" alt=" medal" /></Medal>
            }
            { 
                index == 1 && 
                <Medal><img src="assets/img/argent.png" alt=" medal" /></Medal>
            }
            { 
                index == 2 && 
                <Medal><img src="assets/img/bronze.png" alt=" medal" /></Medal>
            }
        </Card>
    );
};

export default MovieCard;