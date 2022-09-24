import styled from "styled-components";
import { COLORS } from "../../../assets/constant";

export const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: auto;
    margin-top: 30px;

    @media screen and (max-width: 1500px) {
        width: 90%;
    }
`

export const GenreItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 150px;
    background: ${COLORS.yellow};
    font-size: 1.2em;
    margin: 10px;
    border-radius: 7px;

    i {
        font-size: 1.3em;
        color: ${COLORS.red};
        transform: translateY(-10px);
    }

    &:hover {
        cursor: pointer;
        background: ${COLORS.red};
        color: white;
        i {
            color: ${COLORS.yellow};
        }
    }

    @media screen and (max-width: 500px){
        width: 100%;

    }
`