import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Genre } from '../../../assets/interfaces';
import MovieCard from '../../MovieCard';

interface Props {
    genreSelected: Genre,
    type: 'movie' | 'tv'
}

const MovieListByGenre = ({ genreSelected, type }: Props) => {
    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY
    const [moviesList, setMoviesList] = useState<any>([])

    const [reloadCard, setReloadCard] = useState(false)


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreSelected.id}`)
        .then((res) => setMoviesList(res.data.results))
    }, [genreSelected])

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "30px"
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

                        reloadCard={reloadCard}
                        setReloadCard={setReloadCard}
                    />
                ))
            }
        </div>
    );
};

export default MovieListByGenre;