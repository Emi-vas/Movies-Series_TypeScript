import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header"
import Genres from "../components/menus/Genres";
import Popular from "../components/menus/Popular";
import Search from "../components/menus/Search";
import Yourlist from "../components/menus/Yourlist";
import MovieDetails from "../components/MovieDetails";
import Sidebar from "../components/Sidebar"
import { PageContainer, PageMain } from "../styles/Global.style";

const Series = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const idMovie = searchParams.get('id')

    const [menuSelected, setMenuSelected] = useState("popular")
    const [reloadCard, setReloadCard] = useState(false) //reload to add favorit list


    return (
        <>
            <Header page='series' />
            <PageContainer>
                <Sidebar menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>
                <PageMain>
                    { menuSelected == "search" && <Search /> }
                    { menuSelected == "popular" && <Popular type="tv" reloadCard={reloadCard} setReloadCard={setReloadCard} />}
                    { menuSelected == "genres" && <Genres /> }
                    { menuSelected == "your list" && <Yourlist /> }
                </PageMain>
            </PageContainer>

            { idMovie && <MovieDetails id={idMovie} type={"tv"} /> }
            <Footer />
        </>
    );
};

export default Series;