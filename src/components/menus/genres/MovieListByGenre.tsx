import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../../assets/constant';
import { Genre } from '../../../assets/interfaces';
import MovieCard from '../../MovieCard';
import Pagination from '../../Pagination';

interface Props {
    genreSelected: Genre,
    type: 'movie' | 'tv'
}

const MovieListByGenre = ({ genreSelected, type }: Props) => {
    const [moviesList, setMoviesList] = useState<any>([])

    const [reloadCard, setReloadCard] = useState(false)
    const [pageActive, setPageActive] = useState(1)

    useEffect(() => {
        console.log(moviesList)
    }, [moviesList])

    useEffect(() => {
        window.scrollTo(0, 0)

        axios.get(`https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageActive}&with_genres=${genreSelected.id}`)
        .then((res) => setMoviesList(res.data.results))
    }, [genreSelected, pageActive])

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "30px",
                    justifyContent: "center"
                }}
            >
                {
                    moviesList && moviesList.map((movieItem: any) => (
                        <MovieCard 
                            movie={{
                                title : type == "movie" ? movieItem.title : movieItem.name,
                                id : movieItem.id,
                                img : movieItem.poster_path,
                                type: type
                            }}
                            key={movieItem.id}
                            reloadCard={reloadCard}
                            setReloadCard={setReloadCard}
                        />
                    ))
                }
            </div>

            <Pagination pageActive={pageActive} setPageActive={setPageActive}/>
        </div>
    );
};

export default MovieListByGenre;