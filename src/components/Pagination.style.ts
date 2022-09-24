import styled from "styled-components";
import { COLORS } from "../assets/constant";

export const PageNumber = styled.div`
    font-size: 1.2em;
    background: ${COLORS.yellow};

    margin: 5px;
    width: 39px;
    height: 39px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
        color: ${COLORS.red};
        cursor: pointer;
        border-radius: 30%;
    }
`

export const PageTel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${COLORS.yellow};
    width: 130px;
    margin: 10px;
    font-size: 0.9em;

    border-radius: 30px;
    i {
        font-size: 1.3em;
        padding: 7px;
    }
`