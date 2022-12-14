import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header"
import Genres from "../components/menus/genres/Genres";
import Popular from "../components/menus/Popular";
import Search from "../components/menus/Search";
import Yourlist from "../components/menus/Yourlist";
import MovieDetails from "../components/MovieDetails";
import Sidebar from "../components/Sidebar"
import { PageContainer, PageMain } from "../styles/Global.style";

interface Props {
    type: "movie" | "tv"
}

const MainPage = ({type}: Props) => {
    const [searchParams, _] = useSearchParams()
    const idMovie = searchParams.get('id')

    const [menuSelected, setMenuSelected] = useState("popular")
    const [reloadCard, setReloadCard] = useState(false) //reload to add favorit list

    return (
        <>
            <Header page={type} />
            <PageContainer>
                <Sidebar menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>
                <PageMain>
                    { menuSelected == "search" && <Search type={type}/> }
                    { menuSelected == "popular" && <Popular type={type} reloadCard={reloadCard} setReloadCard={setReloadCard} />}
                    { menuSelected == "genres" && <Genres type={type}/> }
                    { menuSelected == "your list" && <Yourlist type={type} reloadCard={reloadCard} setReloadCard={setReloadCard}/> }
                </PageMain>
            </PageContainer>

            { idMovie && <MovieDetails id={idMovie} type={type} reloadCard={reloadCard} setReloadCard={setReloadCard} /> }
            
            <Footer />
        </>
    );
};
export default MainPage;