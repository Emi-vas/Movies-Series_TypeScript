import styled from "styled-components";
import { COLORS } from "../assets/constant";

//Sidebar + pageMain
export const PageContainer = styled.div`
    display: flex;
    background: ${COLORS.background};
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