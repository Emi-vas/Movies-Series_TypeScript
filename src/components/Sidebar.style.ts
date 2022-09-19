import styled from "styled-components"
import { COLORS } from "../assets/constant"

export const Container = styled.div`
    border-right: 2px solid ${COLORS.red};
    min-height: 89vh;
    background: ${COLORS.background};
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    text-align: center;
    font-weight: bold;
    padding: 10px 0;

    i {
        font-size: 1.3em;
        margin-left: 15px;
    }

    p {
        width: 100px;
    }

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.yellow};
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