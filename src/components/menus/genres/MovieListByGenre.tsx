import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Genre } from '../../../assets/interfaces';
import MovieCard from '../../MovieCard';
import Pagination from '../../Pagination';

interface Props {
    genreSelected: Genre,
    type: 'movie' | 'tv'
}

const MovieListByGenre = ({ genreSelected, type }: Props) => {
    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY
    const [moviesList, setMoviesList] = useState<any>([])

    const [reloadCard, setReloadCard] = useState(false)
    const [pageActive, setPageActive] = useState(1)

    useEffect(() => {
        console.log(moviesList)
    }, [moviesList])

    useEffect(() => {
        window.scrollTo(0, 0)

        axios.get(`https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageActive}&with_genres=${genreSelected.id}`)
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
                                title : movieItem.title,
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