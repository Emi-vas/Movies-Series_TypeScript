import styled from "styled-components"
import { COLORS } from "../assets/constant"

export const PageHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100vh;

    @media screen and (max-width: 500px) {
        h1 {
            font-size: 1.5em;
            max-width: 80%;
            text-align: center;
        }
    }
`

export const BlocBtn = styled.div`
    display: flex;

    button {
        margin: 0 10px;
        border-radius: 30px;
        width: 150px;
        font-weight: bold;
        color: ${COLORS.red};
        &:hover {
            color: white;
            background: ${COLORS.red};
        }
    }
    @media screen and (max-width: 500px) {
        button {
            width: 100px;
            font-size: 0.9em;
        }   
    }
`

export const Image = styled.div`
    position: absolute;
    top: 0;
    bottom: 0px;
    width: 100%;
    z-index: -2;

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(19, 22, 27, 0.399);
    }

    @keyframes imgEnter {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes imgLeaveL {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-1500);
        }
    }
    @keyframes imgLeaveR {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(1500);
        }
    }
`
