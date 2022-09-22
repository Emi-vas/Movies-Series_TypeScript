import React from 'react';
import { Genre } from '../../../assets/interfaces';
import { Container, GenreItem } from './GenreList.style';
import { ICONS } from "../../../assets/constant"

interface Props {
    genres: Genre[]
}

const GenreList = ({ genres }: Props) => {
    return (
        <Container>
            {
                genres.map((genre) => (
                    <GenreItem>
                        <i className={ICONS.genre}></i>
                        {genre.name}
                    </GenreItem>
                ))
            }
        </Container>
    );
};

export default GenreList;