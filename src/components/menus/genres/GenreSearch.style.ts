import styled from "styled-components"
import { COLORS } from "../../../assets/constant"

export const SelectGenre = styled.div`
    cursor: pointer;
    background: ${COLORS.redLight};
    color: white;
    font-weight: 500;
    padding: 10px;
    width: 190px;

    transform: translateX(50px);

    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 9;
`

export const Option = styled.div`
    margin: 0 5px;
    padding: 7px 5px;
    transition: transform 0.2s;
    &:hover {
        background: ${COLORS.yellow};
        color: ${COLORS.red};
        transform: scale(1.05);
    }
`

export const ListOptions = styled.div`
    padding-top: 5px;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 20;
    background: ${COLORS.redLight};
`

export const ListOptionsTel = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(24, 24, 24, 0.97);
    color: white;
    z-index: 13;
    overflow: scroll;

    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

    p {
        color: ${COLORS.yellow};
        font-size: 3em;
        text-align: center;
        margin: 0;
        padding: 10px;
    }

    div {
        text-align: center;
        padding: 30px 0;
        width: 100%;
        font-size: 1.1em;
    }
`