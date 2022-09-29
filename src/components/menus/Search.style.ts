import styled from "styled-components";
import { COLORS } from "../../assets/constant";

export const SearchBar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border: 2px solid ${COLORS.redLight};
    border-radius: 30px;
    overflow: hidden;


    input {
        font-size: 2em;
        padding: 12px 20px;
        color: ${COLORS.gray};
    }

    i{
        font-size: 1.5em;
        padding: 20px;
        background: ${COLORS.redLight};
        color: ${COLORS.yellow};
        border: 3px solid ${COLORS.redLight};
        transition: all 0.2s;

        &:hover {
            cursor: pointer;
            transform: scale(1.3);
        }
    }
`

export const BarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`