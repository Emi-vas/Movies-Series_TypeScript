import styled from "styled-components"
import { COLORS } from "../assets/constant"

export const Container = styled.div`
    border-right: 2px solid ${COLORS.red};
    min-height: 89vh;
    background: ${COLORS.background};

    
    @media screen and (max-width: 500px){
        position: fixed;
        bottom: 0;
        
        display: flex;
        justify-content: space-around;

        min-height: unset;
        width: 100%;
        border: none;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    text-align: center;
    font-weight: bold;
    padding: 30px 0;

    i {
        font-size: 1.3em;
        margin-left: 15px;
    }

    p {
        width: 100px;
        padding: 0;
       
    }

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.yellow};
    }

    @media screen and (max-width: 900px) {
        width: 70px;
        p {
            display: none;
        }
        i {
            margin: 0;
        }
    }


    @keyframes animMenu {
        0% {
            transform: scaleY(0.9);
        }
        50%{
            transform: scaleY(1.1);
        }
        100% {
            transform: scaleY(1);
        }
    }
`