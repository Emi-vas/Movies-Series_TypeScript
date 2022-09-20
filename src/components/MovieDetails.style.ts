import styled from "styled-components";
import { COLORS } from "../assets/constant";

export const PageContainer = styled.section`
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    width: 100%;

    display: flex;
    
    h1, p, i, li, ul {
        color: white;
        position: relative;
        z-index: 11;
    }
`

export const BlockText = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;


    h1 {
        font-size: 3em;
        margin-bottom: 0;
    }

    ul {
        display: flex;
    }

    li {
        padding: 10px;
        color: ${COLORS.yellow};
        font-weight: bold;
        font-size: 1.5em;
    }


    p{
        max-width: 90%;
        font-size: 1.2em;
        padding: 10px;
        backdrop-filter: blur(3px);
    }

`


export const Poster = styled.div`
    position: relative;
    width: 25%;
    z-index: 11;
    top: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;

    img {
        width: 100%;
        aspect-ratio: 1/1.4;
        margin-right: 15px;
        animation: arrive 0.3s 1s both;
        transform: translateX(500px);
        border-radius: 30px;
        box-shadow: 3px 3px 10px ${COLORS.boxShadow2};

        @keyframes arrive {
            to {
                transform: translateX(0);
            }
        }
    }
`

export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0% 20%;
    }

    &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background: rgba(24, 24, 24, 0.7);;
    }
`

export const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;

    display: flex;
    align-items: center;

    font-size: 1.3em;
    background: ${COLORS.red};
    border-radius: 30px;
    margin: 20px;
    padding: 10px 20px;

    transition: all 0.3s;

    p {
        margin: 0;
        padding: 0;
        margin-left: 10px;
    }

    &:hover {
        cursor: pointer;
        transform: translateX(-5px);
    }
`