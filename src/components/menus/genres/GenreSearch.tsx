import React, { useState } from 'react';
import { Genre } from '../../../assets/interfaces';
import { isSizeTel } from '../../../functions/utils';
import { ListOptions, ListOptionsTel, Option, SelectGenre } from './GenreSearch.style';
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
                    onBlur={() => {
                        if(window.innerWidth > 500) {
                            setDisplayList(false)
                        }
                    }}
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

                <ListOptionsTel
                    style={{
                        display: displayList && isSizeTel() ? "" : "none"
                    }}
                >
                    <p onClick={() => setDisplayList(false)}>x</p>
                    {
                        genres
                        .filter((genre) => genre.name != genreSelected.name)
                        .map((genre) => (
                            <div 
                                onClick={() => {
                                    setGenreSelected(genre)
                                    setDisplayList(false)
                                }} 
                                key={genre.id}
                            >{genre.name}</div>))
                    }
                </ListOptionsTel>
           </div>

            <MovieListByGenre genreSelected={genreSelected} type={type}/>
        </div>
    );
};

export default GenreSearch;