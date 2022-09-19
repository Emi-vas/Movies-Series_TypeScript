import styled from "styled-components";
import { COLORS } from "../assets/constant";

export const Card = styled.div`
    position: relative;
    width: 23%;
    aspect-ratio: 1/1.4;
    margin: 15px;

    overflow: hidden;

    i {
        position: absolute;
        z-index: 3;
        top: 10px;
        color: white;
        font-size: 1.5em;
        background: ${COLORS.red};
        border-radius: 50%;
        padding: 7px;
        right: 10px;

        transform: scale(0);
    }

    h3 {
        position: absolute;
        z-index: 3;
        bottom: 0;
        width: 100%;
        text-align: center;
        background: ${COLORS.red};
        margin: 0;
        color: white;
        padding: 20px 10px;
        transform: translateY(100px);
        transition: all 0.3s;
    }

    &:hover {
        cursor: pointer;
       h3 {
            transform: translateY(0);
       }
       i {
            animation: heart 0.5s both;
            &:hover {
                background-color: ${COLORS.redLight};
            }
       }
    }

    @media screen and (max-width: 1500px) {
        width: 30%;
    }
    @media screen and (max-width: 1100px) {
        width: 40%;
    }
    @media screen and (max-width: 500px) {
        width: 70%;
    }

    @keyframes heart {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
`

export const Image = styled.div`
    img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Medal = styled.div`
    position: absolute;
    top: -1px;
    left: 0px;
    z-index: 3;

    img {
        width: 70px;
    }
`