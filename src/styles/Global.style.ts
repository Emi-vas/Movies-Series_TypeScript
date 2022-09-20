import styled from "styled-components";
import { COLORS } from "../assets/constant";

//Sidebar + pageMain
export const PageContainer = styled.div`
    display: flex;
    background: ${COLORS.background};
   // position: relative;
`


// movie or serie bloc
export const PageMain = styled.section`
    flex: 1;
    h1 {
        color: ${COLORS.red};
        margin-left: 20px;
    }
`

// list previsu movies on each menus
export const ListMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`


//Buttons
export const Button = styled.button`
    display: flex;
    align-items: center;
    z-index: 11;

    background: ${COLORS.red};
    border-radius: 30px;
    overflow: hidden;
    padding: 5px 20px;
    margin: 15px;
    transition: transform 0.3s;

    i {
        font-size: 1.5em;
    }
    p {
        margin: 0;
    }

    &:hover {
        transform: translateX(-10px);
        background: ${COLORS.redLight};
    }
`