import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../../assets/constant';
import { Genre } from '../../../assets/interfaces';
import GenreList from './GenreList';
import GenreSearch from './GenreSearch';

interface Props {
    type: "movie" | "tv"
}

const Genres = ({ type }: Props) => {

    const [genres, setGenres] = useState<Genre[]>([])
    const [genreSelected, setGenreSelected] = useState<Genre | undefined>(undefined)

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`)
        .then((res) => setGenres(res.data.genres))

        setGenreSelected(undefined)
    }, [type])

    return (
        <div>
            <h1>
                {type == "movie" ? "Movies" : "Series"} genres :
            </h1>
            {
                genres && !genreSelected && <GenreList genres={genres} setGenreSelected={setGenreSelected}/>
            }

            {
                genreSelected && <GenreSearch genreSelected={genreSelected} genres={genres} setGenreSelected={setGenreSelected} type={type}/>
            }
        </div>
    );
};

export default Genres;