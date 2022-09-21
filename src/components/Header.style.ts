import styled from "styled-components";
import { COLORS } from "../assets/constant";

export const HeaderBloc = styled.div`
    height: 100px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: url('/assets/img/header.svg');
    background-position: 0% 5%;

    padding: 0 7%;

    @media screen and (max-width: 500px){
        font-size: 0.8em;
        padding: 0 10px;
        img {
            width: 80px;
        }
    }
`


export const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;

    a {
        background: rgb(189, 54, 42, 1);
        border-radius: 2px;
        color: white;
        font-size: 1.5em;
        margin: 0 20px;
        padding: 0 10px;
        &:hover {
            font-weight: 500;
            color: ${COLORS.yellow};
        }
        @media screen and (max-width: 500px) {
            padding: 0 10px;
        }
    }
`