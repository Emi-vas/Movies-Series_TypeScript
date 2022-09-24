import styled from "styled-components";
import { COLORS } from "../assets/constant";

export const PageNumber = styled.div`
    font-size: 1.5em;
    font-weight: 500;
    background: ${COLORS.yellow};

    margin: 3px;
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

/*    fontWeight: 500
    margin: "5px",
    background: COLORS.yellow,
    width: "35px",
    height: "35px",
    borderRadius: "3px",
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center"*/