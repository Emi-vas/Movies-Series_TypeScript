import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { COLORS, ICONS } from '../assets/constant';
import { Movie } from '../assets/interfaces';
import { addToList, isMovieOnList } from '../functions/yourList';
import { Card, Image, Medal } from './MovieCard.style';

interface Props {
    movie : Movie,
    reloadCard: boolean,
    setReloadCard: (val:boolean) => void
}

const MovieCard = ({movie, reloadCard, setReloadCard}: Props) => {
    const navigate = useNavigate()
    const baseImgUrl = "https://image.tmdb.org/t/p/w500/"
    
    const [isFavorit, setIsFavorit] = useState(false)


    useEffect(() => {
        let yourList: any = localStorage.getItem('yourList')

        if(!yourList) {
            setIsFavorit(false)
        }
        
        yourList = JSON.parse(yourList)
        if(isMovieOnList(movie.id, yourList)){
            setIsFavorit(true)
        } else {
            setIsFavorit(false)
        }
    }, [reloadCard, movie])

    return (
        <Card
           onClick={() => navigate(`?id=${movie.id}`)}
           style={{
                boxShadow : isFavorit ? `2px 5px 3px ${COLORS.redLight}` : '',
                borderRadius: isFavorit ? "3px" : ""
           }}
        >
            <i 
                className={isFavorit ? ICONS.heartOn : ICONS.heartOff}
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToList(movie)
                    setReloadCard(!reloadCard)
                }}
                style={{
                    transform: 'scale(1)',
                    animation: isFavorit ? "none" : "",
                    fontSize: isFavorit ? '2em': ''
                }}
            ></i>
            <h3>
                {
                   movie.title
                }
            </h3>
            <Image>
                <img src={baseImgUrl + movie.img} alt={movie.title} />
            </Image>
        </Card>
    );
};

export default MovieCard;