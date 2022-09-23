import React from 'react';
import { Genre } from '../../../assets/interfaces';
import { Container, GenreItem } from './GenreList.style';
import { ICONS } from "../../../assets/constant"

interface Props {
    genres: Genre[],
    setGenreSelected: (value: Genre) => void
}

const GenreList = ({ genres, setGenreSelected }: Props) => {
    return (
        <Container>
            {
                genres.map((genre) => (
                    <GenreItem
                        onClick={() => setGenreSelected(genre)}
                        key={genre.id}
                    >
                        <i className={ICONS.genre}></i>
                        {genre.name}
                    </GenreItem>
                ))
            }
        </Container>
    );
};

export default GenreList;