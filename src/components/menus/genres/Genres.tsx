import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Genre } from '../../../assets/interfaces';
import GenreList from './GenreList';

const Genres = () => {
    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY

    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then((res) => setGenres(res.data.genres))
    }, [])

    return (
        <div>
            {
                genres && <GenreList genres={genres}/>
            }
        </div>
    );
};

export default Genres;