import React, { useState } from 'react';
import { Genre } from '../../../assets/interfaces';
import { ListOptions, Option, SelectGenre } from './GenreSearch.style';
import MovieListByGenre from './MovieListByGenre';

interface Props {
    genreSelected: Genre,
    genres: Genre[],
    setGenreSelected: (value: Genre) => void,
    type: "movie" | "tv"
}

const GenreSearch = ({ genreSelected, genres, setGenreSelected, type }: Props) => {

    const [displayList, setDisplayList] = useState(false)

    return (
        <div>
           <div style={{ display: "flex" }}>
                <SelectGenre
                    tabIndex={0}
                    onBlur={() => setDisplayList(false)}
                    onClick={() => setDisplayList(!displayList)}
                >

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    ><div>{genreSelected.name}</div><div>&#x25BC;</div></div>
                    <ListOptions
                        style={{
                            display: displayList ? "" : "none"
                        }}
                    >
                        {
                            genres
                            .filter((genre) => genre.name != genreSelected.name)
                            .map((genre) => <Option onClick={() => setGenreSelected(genre)} key={genre.id}>{genre.name}</Option>)
                        }
                    </ListOptions>
                </SelectGenre>
           </div>

            <MovieListByGenre genreSelected={genreSelected} type={type}/>
        </div>
    );
};

export default GenreSearch;